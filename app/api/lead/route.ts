import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lead capture endpoint.
//
// Requires two environment variables set on Railway (see README.md):
//   RESEND_API_KEY  - API key from resend.com (free tier is plenty to start)
//   LEAD_TO_EMAIL   - the email address that should receive every lead
//   LEAD_FROM_EMAIL - a "from" address on a domain verified in Resend
//                     (e.g. leads@thetenerifesolarguide.com)
//
// If RESEND_API_KEY isn't set, the route still accepts submissions and logs
// them to the server console so nothing is silently lost during setup. 
// but you should configure Resend before going live so you actually receive leads.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, town, interest, message, source } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const summary = `
New lead from ${source || "unknown page"}

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Town / area: ${town || "-"}
Interested in: ${interest || "-"}
Message: ${message || "-"}
Page source: ${source || "-"}
Submitted: ${new Date().toISOString()}
`.trim();

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEAD_TO_EMAIL;
    const fromEmail = process.env.LEAD_FROM_EMAIL || "leads@thetenerifesolarguide.com";

    if (apiKey && toEmail) {
      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: `The Tenerife Solar Guide <${fromEmail}>`,
        to: toEmail,
        reply_to: email,
        subject: `New solar lead: ${name} (${town || source || "Tenerife"})`,
        text: summary,
      });

      // The Resend SDK doesn't always throw on API-level failures (e.g. an
      // unverified sending domain, or a recipient restriction on a free-tier
      // account) , it can instead return { error } while still resolving
      // successfully. Without this check, a rejected email would silently
      // look like a success to both this server and the visitor's browser.
      if (error) {
        console.error("Resend rejected the email:", error);
        console.log("LEAD DETAILS (not delivered by email. Check console):", summary);
        return NextResponse.json(
          { error: `Email not sent: ${error.message || "unknown Resend error"}` },
          { status: 502 }
        );
      }

      console.log("Lead email sent via Resend, id:", data?.id);
    } else {
      // Fallback so nothing is lost while email isn't configured yet.
      console.log("LEAD RECEIVED (email not configured):", summary);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

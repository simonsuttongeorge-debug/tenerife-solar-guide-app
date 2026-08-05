export default function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl2 border border-deep-100 bg-white p-4 text-center shadow-sm">
      <p className="text-2xl font-extrabold text-sun-600">{value}</p>
      <p className="text-xs text-deep-500 mt-1">{label}</p>
    </div>
  );
}

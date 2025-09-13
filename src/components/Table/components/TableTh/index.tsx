export async function TableTh({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-2 whitespace-nowrap">{children}</th>
  );
}
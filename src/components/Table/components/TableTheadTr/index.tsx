export async function TableTheadTr({ children }: { children: React.ReactNode }) {
  return (
    <tr className="*:font-medium *:text-gray-900">
      {children}
    </tr>
  );
}
export async function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200">
      {children}
    </table>
  );
}
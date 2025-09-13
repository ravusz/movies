export async function TableThead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="ltr:text-left rtl:text-right">
      {children}
    </thead>
  );
}
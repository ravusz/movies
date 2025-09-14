export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-5xl mx-auto py-20">
        {children}
      </div>
    </main>
  );
}

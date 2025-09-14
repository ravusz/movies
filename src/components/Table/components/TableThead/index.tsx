type TableTheadProps = React.ComponentProps<"thead"> & {
  children: React.ReactNode
}

export async function TableThead({ children, className = "", ...restProps }: TableTheadProps) {
  return (
    <thead className={`ltr:text-left rtl:text-right ${className}`} {...restProps}>
      {children}
    </thead>
  );
}
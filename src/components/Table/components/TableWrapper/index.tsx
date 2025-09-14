type TableWrapperProps = React.ComponentProps<"table"> & {
  children: React.ReactNode
}

export function TableWrapper({ children, className = "", ...restProps }: TableWrapperProps) {
  return (
    <table className={`min-w-full divide-y-2 divide-gray-200 ${className}`} {...restProps}>
      {children}
    </table>
  );
}
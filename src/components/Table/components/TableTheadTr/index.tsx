type TableTheadTrProps = React.ComponentProps<"tr"> & {
  children: React.ReactNode
}

export async function TableTheadTr({ children, className, ...restProps }: TableTheadTrProps) {
  return (
    <tr className={`*:font-medium *:text-gray-900 ${className}`} {...restProps}>
      {children}
    </tr>
  );
}
type TableTbodyTrProps = React.ComponentProps<"tr"> & {
  children: React.ReactNode
}

export function TableTbodyTr({ children, className = "", ...restProps }: TableTbodyTrProps) {
  return (
    <tr className={`*:text-gray-900 *:first:font-medium ${className}`} {...restProps}>{children}</tr>
  );
}
type TableTbodyProps = React.ComponentProps<"tbody"> & {
  children: React.ReactNode
}

export async function TableTbody({ children, className, ...restProps }: TableTbodyProps) {
  return (
    <tbody className={`divide-y divide-gray-200 *:even:bg-gray-50 ${className}`} {...restProps}>{children}</tbody>
  );
}
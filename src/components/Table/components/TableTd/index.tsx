type TableTdProps = React.ComponentProps<"td"> & {
  children: React.ReactNode
}

export async function TableTd({ children, className, ...restProps }: TableTdProps) {
  return (
    <td className={`px-3 py-2 whitespace-nowrap ${className}`} {...restProps}>{children}</td>
  );
}
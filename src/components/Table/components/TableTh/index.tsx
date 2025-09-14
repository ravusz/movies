type TableThProps = React.ComponentProps<"th"> & {
  children: React.ReactNode
}

export function TableTh({ children, className = "", ...restProps }: TableThProps) {
  return (
    <th className={`px-3 py-2 whitespace-nowrap ${className}`} {...restProps}>
      <span className="font-semibold">{children}</span>
    </th>
  );
}
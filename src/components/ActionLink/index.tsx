import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

type ActionLinkProps = LinkProps & {
  children: ReactNode;
  title?: string;
};

export function ActionLink({ children, ...restProps }: ActionLinkProps) {
  return (
    <Link
      className="inline-flex items-center justify-center p-2 rounded-sm hover:bg-gray-200 transition-colors duration-200"
      {...restProps}
    >
      {children}
    </Link>
  );
}

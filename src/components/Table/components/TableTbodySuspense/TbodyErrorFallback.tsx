import type { FallbackProps } from "react-error-boundary";

import { TableError } from "@/components/Table/components/TableError";
import { useErrorBoundaryReset } from "@/lib/hooks/useErrorBoundaryReset";

export function TbodyErrorFallback({ resetErrorBoundary }: FallbackProps) {
  const reload = useErrorBoundaryReset(resetErrorBoundary);

  return <TableError resetErrorBoundary={reload} />;
}

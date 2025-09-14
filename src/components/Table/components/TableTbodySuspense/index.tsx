import { Suspense } from "react";
import type { ReactNode } from "react";
import { TbodyErrorBoundary } from "./TbodyErrorBoundary";
import { TbodySkeleton } from "./TbodySkeleton";
import { TableTbody } from "../TableTbody";

type TableTbodySuspenseProps = {
  children: ReactNode;
  rowsCount?: number
  cellsCount?: number
}

export function TableTbodySuspense({
  children, rowsCount, cellsCount
}: TableTbodySuspenseProps) {
  return (
    <TableTbody>
      <TbodyErrorBoundary>
        <Suspense fallback={<TbodySkeleton rowsCount={rowsCount} cellsCount={cellsCount} />} >
          {children}
        </Suspense>
      </TbodyErrorBoundary>
    </TableTbody>
  );
}

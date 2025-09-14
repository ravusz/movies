import { Suspense } from "react";
import type { ReactNode } from "react";
import { TbodyErrorBoundary } from "./TbodyErrorBoundary";
import { TbodySkeleton } from "./TbodySkeleton";
import { TableTbody } from "../TableTbody";

type TableTbodySuspenseProps = {
  children: ReactNode;
}

export function TableTbodySuspense({
  children,
}: TableTbodySuspenseProps) {
  return (
    <TableTbody>
      <TbodyErrorBoundary>
        <Suspense fallback={<TbodySkeleton />} >
          {children}
        </Suspense>
      </TbodyErrorBoundary>
    </TableTbody>
  );
}

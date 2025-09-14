import { TableTbodyTr } from "../TableTbodyTr";
import { TableTd } from "../TableTd";

type TbodySkeletonProps = {
  rowsCount?: number
  cellsCount?: number
}


export function TbodySkeleton({ rowsCount = 10, cellsCount = 4 }: TbodySkeletonProps) {
  return Array.from({ length: rowsCount }).map((_, index) => (
    <TableTbodyTr key={`skeleton-row-${index}`}>
      {Array.from({ length: cellsCount }).map((_, index) => (
        <TableTd key={`skeleton-cell-${index}`}>
          <div className="h-[25.5px] bg-gray-300 rounded animate-pulse" />
        </TableTd>
      ))}
    </TableTbodyTr>
  ));
}
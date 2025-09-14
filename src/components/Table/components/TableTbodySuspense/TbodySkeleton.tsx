import { TableTbodyTr } from "../TableTbodyTr";
import { TableTd } from "../TableTd";

export function TbodySkeleton() {
  return Array.from({ length: 10 }).map((_, index) => (
    <TableTbodyTr key={`skeleton-row-${index}`}>
      {Array.from({ length: 3 }).map((_, index) => (
        <TableTd key={`skeleton-cell-${index}`}>
          <div className="h-[25.5px] bg-gray-300 rounded animate-pulse" />
        </TableTd>
      ))}
    </TableTbodyTr>
  ));
}
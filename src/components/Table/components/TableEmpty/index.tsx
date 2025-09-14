import { TableTbodyTr, TableTd } from "@/components/Table";
import { Flex } from "@/components/Flex";
import { Text } from "@/components/Text";
import SearchIcon from "@/icons/search.svg";

type TableEmptyProps = {
  description?: string;
  title?: string;
}

export function TableEmpty({
  description = "Sorry :( There are no results. Please try adjusting your search to find what you're looking for.",
  title = "No Results Found",
}: TableEmptyProps) {
  return (
    <TableTbodyTr>
      <TableTd colSpan={99}>
        <Flex align="center" direction="column" justify="center" className="h-60">
          <SearchIcon className="text-gray-900 w-12" />
          <Text color="text-gray-900" size="md" className="mt-2 mb-1" weight="bold">
            {title}
          </Text>
          <Text color="text-gray-900" size="sm" className="mt-2">
            {description}
          </Text>
        </Flex>
      </TableTd>
    </TableTbodyTr>
  );
}

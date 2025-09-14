"use client";
import { Flex } from "@/components/Flex";
import { TableTbodyTr, TableTd } from "@/components/Table";
import { Text } from "@/components/Text";

import type { FallbackProps } from "react-error-boundary";

export function TableError({ resetErrorBoundary }: Partial<FallbackProps>) {
  return (
    <TableTbodyTr>
      <TableTd colSpan={99} className="p-6">
        <Flex
          align="center"
          direction="column"
          justify="center"
          className="space-y-3 text-center h-60"
        >
          <h2 className="text-lg font-semibold text-red-600">
            Ooops!
          </h2>

          <Text className="text-gray-600">
            Something went wrong. Please try again.
          </Text>

          <button
            onClick={resetErrorBoundary}
            className="mt-2 rounded-lg bg-red-500 px-4 py-2 text-white text-sm font-medium shadow-sm 
                       hover:bg-red-600 cursor-pointer transition-colors duration-200"
          >
            Retry
          </button>
        </Flex>
      </TableTd>
    </TableTbodyTr>
  );
}

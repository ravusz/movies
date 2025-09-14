"use client";
import { Flex } from "@/components/Flex";
import { TableTbodyTr, TableTd } from "@/components/Table";
import { Text } from "@/components/Text";

import type { FallbackProps } from "react-error-boundary";

export function TableError({ resetErrorBoundary }: Partial<FallbackProps>) {
  return (
    <TableTbodyTr>
      <TableTd colSpan={99}>
        <Flex align="center" direction="column" justify="center">
          <h2  >
            Ooops!
          </h2>
          <Text >
            Something went wrong. Please try again.
          </Text>
          <button

            onClick={resetErrorBoundary}
            style={{ alignSelf: "center" }}
          >
            Retry
          </button>
        </Flex>
      </TableTd>
    </TableTbodyTr>
  );
}

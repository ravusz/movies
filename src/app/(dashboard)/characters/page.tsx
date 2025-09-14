import { CharactersSearchInput } from "./components/CharactersSearchInput";
import { CharactersTableBody, CharactersTableHeader } from "./components/CharactersTable";
import { Table, TableTbodySuspense } from "@/components/Table";
import { ContentCard } from "@/components/ContentCard";
import { Suspense } from "react";

type CharactersPageProps = {
  searchParams: Promise<{ search?: string }>;
};

export default function CharactersPage({ searchParams }: CharactersPageProps) {
  return (
    <ContentCard title="Star Wars Characters">
      <div className="mb-4">
        <Suspense fallback={null}>
          <CharactersSearchInput />
        </Suspense>
      </div>

      <div className="h-full relative overflow-auto">
        <Table className="absolute">
          <CharactersTableHeader />
          <TableTbodySuspense>
            <CharactersTableBody searchParams={searchParams} />
          </TableTbodySuspense>
        </Table>
      </div>
    </ContentCard>
  );
}

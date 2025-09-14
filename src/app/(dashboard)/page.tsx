import { CharactersSearchInput } from "@/app/(dashboard)/components/CharactersSearchInput";
import { CharactersTableBody, CharactersTableHeader } from "@/app/(dashboard)/components/CharactersTable";
import { Table, TableTbodySuspense } from "@/components/Table";
import { ContentCard } from "@/components/ContentCard";

type CharactersPageProps = {
  searchParams: Promise<{ search?: string }>;
};

export default function CharactersPage({ searchParams }: CharactersPageProps) {
  return (
    <ContentCard title="Star Wars Characters">
      <div className="mb-4">
        <CharactersSearchInput />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <CharactersTableHeader />
          <TableTbodySuspense>
            <CharactersTableBody searchParams={searchParams} />
          </TableTbodySuspense>
        </Table>
      </div>
    </ContentCard>
  );
}

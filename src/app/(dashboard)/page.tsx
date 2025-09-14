import { CharactersSearchInput } from "@/app/(dashboard)/components/CharactersSearchInput";
import { CharactersTableBody, CharactersTableHeader } from "@/app/(dashboard)/components/CharactersTable";
import { Table, TableTbody } from "@/components/Table";

type CharactersPageProps = {
  searchParams: Promise<{ search?: string }>;
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CharactersSearchInput />
        <Table>
          <CharactersTableHeader />
          <TableTbody>
            <CharactersTableBody searchParams={searchParams} />
          </TableTbody>
        </Table>
      </main>
    </div>
  );
}

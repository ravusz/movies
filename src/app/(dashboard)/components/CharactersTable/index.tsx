import { fetchAllCharacters } from "@/lib/api/apiDocs/characters";
import { TableThead, TableTheadTr, TableTh, TableTbodyTr, TableTd, TableEmpty } from "@/components/Table";

export async function CharactersTableHeader() {
  return (
    <TableThead>
      <TableTheadTr>
        <TableTh>Name</TableTh>
        <TableTh>Gender</TableTh>
        <TableTh>Birth Year</TableTh>
      </TableTheadTr>
    </TableThead>
  );
}

type CharactersTableBodyProps = {
  searchParams: Promise<{ search?: string }>;
}

export async function CharactersTableBody({ searchParams }: CharactersTableBodyProps) {
  const { search = "" } = (await searchParams)

  const { data: characters = [] } = await fetchAllCharacters({ search });

  if (characters.length === 0) {
    return (
      <TableEmpty />
    );
  }

  return (
    <>
      {characters.map(
        ({ id, name, gender, birthYear }) => {
          return (
            <TableTbodyTr key={`character-${id}`}>
              <TableTd>
                {name}
              </TableTd>
              <TableTd>
                {gender}
              </TableTd>
              <TableTd>
                {birthYear}
              </TableTd>
            </TableTbodyTr>
          );
        },
      )}
    </>
  );
}

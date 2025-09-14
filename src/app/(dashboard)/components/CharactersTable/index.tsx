import { fetchAllCharacters } from "@/lib/api/apiDocs/characters";
import { TableThead, TableTheadTr, TableTh, TableTbodyTr, TableTd, TableEmpty } from "@/components/Table";
import MovieIcon from "@/icons/movie.svg";
import { ActionLink } from "@/components/ActionLink";

export async function CharactersTableHeader() {
  return (
    <TableThead>
      <TableTheadTr>
        <TableTh>Name</TableTh>
        <TableTh>Gender</TableTh>
        <TableTh>Birth Year</TableTh>
        <TableTh className="text-end">Actions</TableTh>
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
              <TableTd className="text-end">
                <ActionLink
                  href={`/${id}`}
                  title="See movies"
                >
                  <MovieIcon className="w-4" />
                </ActionLink>
              </TableTd>
            </TableTbodyTr>
          );
        },
      )}
    </>
  );
}

import { fetchAllCharacterFilms } from "@/lib/api/apiDocs/characters";
import { TableThead, TableTheadTr, TableTh, TableTbodyTr, TableTd, TableEmpty } from "@/components/Table";

export async function CharacterMoviesTableHeader() {
  return (
    <TableThead>
      <TableTheadTr>
        <TableTh>Title</TableTh>
      </TableTheadTr>
    </TableThead>
  );
}

type CharacterMoviesTableProps = {
  params: Promise<{ id: string }>;
}

export async function CharacterMoviesTableBody({ params }: CharacterMoviesTableProps) {
  const { id } = (await params)

  const { data: movies = [] } = await fetchAllCharacterFilms({ id });

  if (movies.length === 0) {
    return (
      <TableEmpty />
    );
  }

  return (
    <>
      {movies.map(
        ({ id, title }) => {
          return (
            <TableTbodyTr key={`character-movies-${id}`}>
              <TableTd>
                {title}
              </TableTd>
            </TableTbodyTr>
          );
        },
      )}
    </>
  );
}

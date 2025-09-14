import { fetchAllCharacters } from "@/lib/api/apiDocs/characters";
import { TableThead, TableTheadTr, TableTh, TableTbodyTr, TableTd, TableEmpty } from "@/components/Table";
import Link from "next/link";
import MovieIcon from "@/icons/movie.svg";

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
                <Link
                  href={`/${id}`}
                  className="inline-flex items-center justify-center p-2 rounded-sm hover:bg-gray-200 transition-colors duration-200"
                  title="See movies"
                >
                  <MovieIcon width="1rem" />
                </Link>
              </TableTd>
            </TableTbodyTr>
          );
        },
      )}
    </>
  );
}

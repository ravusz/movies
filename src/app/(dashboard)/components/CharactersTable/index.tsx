import { fetchAllCharacters } from "@/lib/api/apiDocs/characters";
import { TableThead, TableTheadTr, TableTh } from "@/components/Table";

export async function CharactersTableHeader() {
  return (
    <TableThead>
      <TableTheadTr>
        <TableTh>test</TableTh>
        <TableTh>222</TableTh>
      </TableTheadTr>
    </TableThead>
  );
}

export async function CharactersTableBody() {
  const { data: characters = [] } = await fetchAllCharacters();


  if (characters.length === 0) {
    return (
      <div

      />
    );
  }

  return (
    <>
      {characters.map(
        ({ id }) => {
          return (
            <div key={`character-${id}`}>
              {id}
            </div>
          );
        },
      )}
    </>
  );
}

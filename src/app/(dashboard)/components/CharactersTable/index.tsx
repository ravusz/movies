import { fetchAllCharacters } from "@/lib/api/apiDocs/characters";
import { TableThead, TableTheadTr, TableTh, TableTbodyTr, TableTd, TableEmpty } from "@/components/Table";

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

  console.log("characters", characters)


  if (characters.length === 0) {
    return (
      <TableEmpty />
    );
  }

  return (
    <>
      {characters.map(
        ({ id, name }) => {
          return (
            <TableTbodyTr key={`character-${id}`}>
              <TableTd>
                {name}
              </TableTd>
              <TableTd>
                {id}
              </TableTd>
            </TableTbodyTr>
          );
        },
      )}
    </>
  );
}

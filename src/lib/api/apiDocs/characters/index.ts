import type { Character, CharacterResponse } from "@/lib/api/apiDocs/characters/types";
import { characterMapper } from "@/lib/api/apiDocs/characters/mapper";
import { apiDocsApi } from "@/lib/api/apiDocs";

export const fetchAllCharacters = async ({ search }: { search: string }): Promise<{ data: Character[] }> => {
  const characters = await apiDocsApi.get<CharacterResponse[]>("characters", {
    searchParams: {
      search
    }
  }).json();
  const data: Character[] = characters.map((character) => characterMapper(character));

  return { data }
};
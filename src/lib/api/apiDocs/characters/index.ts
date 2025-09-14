import type { Character, CharacterResponse, Film } from "@/lib/api/apiDocs/characters/types";
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

export const fetchAllCharacterFilms = async ({ id }: { id: string }): Promise<{ data: Film[] }> => {
  const films = await apiDocsApi.get<Film[]>(`characters/${id}/films`).json();

  return { data: films }
};
import type { Character, CharacterResponse, Film } from "@/lib/api/apiDocs/characters/types";
import { characterMapper } from "@/lib/api/apiDocs/characters/mapper";
import { apiDocsApi } from "@/lib/api/apiDocs";

export const charactersTags = {
  characters: 'characters' as const,
  characterFilms: (id: string) => `${charactersTags.characters}-${id}-films` as const,
}

export const fetchAllCharacters = async ({ search }: { search: string }): Promise<{ data: Character[] }> => {
  const isDefault = !search;

  const characters = await apiDocsApi.get<CharacterResponse[]>("characters", {
    searchParams: {
      search
    },
    cache: isDefault ? "force-cache" : "no-store",
    next: isDefault ? { tags: [charactersTags.characters] } : undefined
  }).json();
  const data: Character[] = characters.map((character) => characterMapper(character));

  return { data }
};

export const fetchAllCharacterFilms = async ({ id }: { id: string }): Promise<{ data: Film[] }> => {
  const films = await apiDocsApi.get<Film[]>(`characters/${id}/films`, {
    cache: "force-cache",
    next: {
      tags: [charactersTags.characterFilms(id)]
    }
  }).json();

  return { data: films }
};
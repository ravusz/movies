import type { Character, CharacterResponse } from "@/lib/api/apiDocs/characters/types";
import { characterMapper } from "@/lib/api/apiDocs/characters/mapper";

export const fetchAllCharacters = async (): Promise<{ data: Character[] }> => {
  const response = await fetch('https://swapi.online/api/characters/')
  const rawCharacters: CharacterResponse[] = await response.json();
  const data: Character[] = rawCharacters.map((character) => characterMapper(character));

  return { data }
};
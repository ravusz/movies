import type { Character, CharacterResponse } from "@/lib/api/apiDocs/characters/types";

export function characterMapper(characterResponse: CharacterResponse): Character {
  return {
    id: characterResponse.id,
    name: characterResponse.name,
    gender: characterResponse.gender,
    skinColor: characterResponse.skin_color,
    hairColor: characterResponse.hair_color,
    height: characterResponse.height,
    eyeColor: characterResponse.eye_color,
    mass: characterResponse.mass,
    homeworld: characterResponse.homeworld,
    birthYear: characterResponse.birth_year,
    speciesId: characterResponse.species_id,
  };
}
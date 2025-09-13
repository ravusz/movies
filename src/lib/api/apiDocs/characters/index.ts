export const fetchAllCharacters = async () => {
  const res = await fetch('https://swapi.online/api/characters/')
  const data = await res.json()

  return { data }
};
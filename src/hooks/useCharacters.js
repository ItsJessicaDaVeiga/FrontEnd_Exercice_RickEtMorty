import {
  useQuery,
} from '@tanstack/react-query'

export function Toto () {
  return useQuery({
    queryKey: ['fetch-characters'],
    queryFn: async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      return response.json();
    }
  })
}
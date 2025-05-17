import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export function useEpisodes(showId: string) {
  const { data, isFetching, error } = useQuery({
    queryKey: ['episodes', showId],
    queryFn: () => api.getEpisodes(showId),
  })

  return {
    episodes: error ? [] : (data ?? []),
    isFetching,
  }
}

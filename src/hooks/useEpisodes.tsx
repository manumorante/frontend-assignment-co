import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { Episode, Season } from '@/types'

export function useEpisodes(showId: string) {
  const { data, isFetching, error } = useQuery<Episode[], unknown, Season[]>({
    queryKey: ['episodes', showId],
    queryFn: () => api.getEpisodes(showId),
    select: buildSeasons,
  })

  return {
    seasons: error ? [] : (data ?? []),
    isFetching,
  }
}

function buildSeasons(episodes: Episode[] = []): Season[] {
  const bySeason: { [key: string]: Episode[] } = {}

  for (const episode of episodes) {
    if (!bySeason[episode.season]) bySeason[episode.season] = []
    bySeason[episode.season].push(episode)
  }

  const groups = Object.entries(bySeason).map(([season, episodes]) => ({
    season: Number(season),
    episodes: episodes as Episode[],
  }))

  groups.sort((a, b) => a.season - b.season)

  return groups
}

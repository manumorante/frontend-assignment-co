import { Episode, Show } from '@/types'

const API_BASE_URL = 'https://api.tvmaze.com'

const delay = () => new Promise((resolve) => setTimeout(resolve, 500))

async function fetcher<T>(endpoint: string): Promise<T> {
  // Delay para mostrar mejor cosas implementadas como React Query cache, loading, skeleton...
  await delay()

  const response = await fetch(`${API_BASE_URL}${endpoint}`)
  if (!response.ok) throw new Error('fetcher() - Failed to fetch ' + endpoint)
  return response.json() as Promise<T>
}

export const api = {
  getShows: (page = 0): Promise<Show[]> => {
    return fetcher<Show[]>(`/shows?page=${page}`)
  },

  getShow: (id: Show['id']): Promise<Show> => {
    return fetcher<Show>(`/shows/${id}`)
  },

  getEpisodes: (id: Show['id']): Promise<Episode[]> => {
    return fetcher<Episode[]>(`/shows/${id}/episodes`)
  },

  searchShows: (query: string): Promise<{ score: number; show: Show }[]> => {
    return fetcher<{ score: number; show: Show }[]>(`/search/shows?q=${encodeURIComponent(query)}`)
  },
}

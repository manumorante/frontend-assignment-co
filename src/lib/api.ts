import { Show } from '@/types'

const API_BASE_URL = 'https://api.tvmaze.com'

async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
  if (!response.ok) throw new Error('fetcher() - Failed to fetch ' + endpoint)
  return response.json() as Promise<T>
}

export const api = {
  getShows: (page = 0): Promise<Show[]> => fetcher<Show[]>(`/shows?page=${page}`),
  getShow: (id: Show['id']): Promise<Show> => fetcher<Show>(`/shows/${id}`),
}

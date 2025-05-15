import { Show } from '@/types'

const API_BASE_URL = 'https://api.tvmaze.com'

export async function getShows(): Promise<Show[]> {
  const response = await fetch(`${API_BASE_URL}/shows`)

  if (!response.ok) {
    throw new Error('[getShows] Error loading shows')
  }

  return response.json()
}

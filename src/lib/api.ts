import { Show } from '@/types'

const API_BASE_URL = 'https://api.tvmaze.com'

export const api = {
  async getShows(): Promise<Show[]> {
    const response = await fetch(`${API_BASE_URL}/shows`)

    if (!response.ok) {
      throw new Error('[getShows] Error loading shows')
    }

    return response.json()
  },

  async getShow(id: Show['id']): Promise<Show> {
    const response = await fetch(`${API_BASE_URL}/shows/${id}`)

    if (!response.ok) {
      throw new Error(`[getShow] Error loading show with id ${id}`)
    }

    return response.json()
  },
}

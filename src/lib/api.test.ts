import { api } from '@/lib/api'
import { mockEpisodes, mockShow, mockShows } from '@/test/mocks'
import { describe, expect, it, vi } from 'vitest'

describe('api', () => {
  describe('getShows', () => {
    it('fetches shows with specific page', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockShows),
      })

      const result = await api.getShows(2)
      expect(result).toEqual(mockShows)
    })
  })

  describe('getShow', () => {
    it('fetches a show', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockShow),
      })

      const result = await api.getShow('1')
      expect(result).toEqual(mockShow)
    })
  })

  describe('getEpisodes', () => {
    it('fetches episodes for a show', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockEpisodes),
      })

      const result = await api.getEpisodes('1')
      expect(result).toEqual(mockEpisodes)
    })
  })
})

import { api } from '@/lib/api'
import { describe, expect, it, vi } from 'vitest'

describe('api', () => {
  describe('getShows', () => {
    it('fetches shows', async () => {
      const mockShows = [{ id: 1, name: 'Test Show' }]
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockShows),
      })

      const result = await api.getShows()
      expect(result).toEqual(mockShows)
    })
  })

  describe('getShow', () => {
    it('fetches a show', async () => {
      const mockShow = { id: 1, name: 'Test Show' }
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockShow),
      })

      const result = await api.getShow('1')
      expect(result).toEqual(mockShow)
    })
  })
})

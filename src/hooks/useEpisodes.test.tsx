import { useEpisodes } from '@/hooks/useEpisodes'
import { api } from '@/lib/api'
import { mockEpisode } from '@/test/mocks'
import { queryClientWrapper } from '@/test/utils'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

describe('useEpisodes', () => {
  it('returns episodes for a show', async () => {
    vi.spyOn(api, 'getEpisodes').mockResolvedValue([mockEpisode])
    const { result } = renderHook(() => useEpisodes('1'), {
      wrapper: queryClientWrapper(),
    })
    await waitFor(() => {
      expect(result.current.isFetching).toBe(false)
      expect(result.current.episodes).toEqual([mockEpisode])
    })
  })

  it('returns empty array if api fails', async () => {
    vi.spyOn(api, 'getEpisodes').mockRejectedValue(new Error('fail'))
    const { result } = renderHook(() => useEpisodes('1'), {
      wrapper: queryClientWrapper(),
    })
    await waitFor(() => {
      expect(result.current.episodes).toEqual([])
    })
  })
})

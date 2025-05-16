import { useShowList } from '@/hooks/useShowList'
import { api } from '@/lib/api'
import { mockShow } from '@/test/mocks'
import { renderHook, waitFor } from '@testing-library/react'
import { queryClientWrapper } from '@/test/utils'
import { describe, expect, it, vi } from 'vitest'

vi.spyOn(api, 'getShows').mockResolvedValue(Array(25).fill(mockShow))

describe('useShowList', () => {
  it('returns paginated shows', async () => {
    const { result } = renderHook(() => useShowList(), { wrapper: queryClientWrapper() })
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.shows).toHaveLength(20)
      expect(result.current.hasNextPage).toBe(true)
    })
    // Fetch next page
    result.current.fetchNextPage()
    await waitFor(() => {
      expect(result.current.shows).toHaveLength(25)
      expect(result.current.hasNextPage).toBe(false)
    })
  })
})

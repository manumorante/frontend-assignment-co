import { useShowList } from '@/hooks/useShowList'
import { api } from '@/lib/api'
import { mockShow } from '@/test/mocks'
import { queryClientWrapper } from '@/test/utils'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.spyOn(api, 'getShows').mockResolvedValue(Array(50).fill(mockShow))

describe('useShowList', () => {
  it('returns paginated shows', async () => {
    const { result } = renderHook(() => useShowList({ pageSize: 25 }), {
      wrapper: queryClientWrapper(),
    })
    await waitFor(() => {
      expect(result.current.isFetching).toBe(false)
      expect(result.current.shows).toHaveLength(25)
      expect(result.current.hasNextPage).toBe(true)
    })

    // Next page
    result.current.fetchNextPage()

    await waitFor(() => {
      expect(result.current.shows).toHaveLength(50)
      expect(result.current.hasNextPage).toBe(true)
    })
  })
})

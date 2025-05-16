import { useShow } from '@/hooks/useShow'
import { api } from '@/lib/api'
import { mockShow } from '@/test/mocks'
import { queryClientWrapper } from '@/test/utils'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.spyOn(api, 'getShow').mockResolvedValue(mockShow)

describe('useShow', () => {
  it('returns show data', async () => {
    const { result } = renderHook(() => useShow('1'), { wrapper: queryClientWrapper() })
    await waitFor(() => {
      expect(result.current.show).toEqual(mockShow)
    })
  })
})

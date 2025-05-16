import { useShow } from '@/hooks/useShow'
import { api } from '@/lib/api'
import { mockShow } from '@/test/mocks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'

vi.spyOn(api, 'getShow').mockResolvedValue(mockShow)

describe('useShow', () => {
  const queryClient = new QueryClient()
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  it('returns show data', async () => {
    const { result } = renderHook(() => useShow('1'), { wrapper })
    await waitFor(() => {
      expect(result.current.show).toEqual(mockShow)
    })
  })
})

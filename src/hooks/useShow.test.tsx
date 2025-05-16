import { api } from '@/lib/api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { useShow } from './useShow'

vi.mock('@/lib/api')

describe('useShow', () => {
  const queryClient = new QueryClient()
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  it('returns show data', async () => {
    const mockShow = {
      id: '1',
      name: 'Test Show',
      image: {
        medium: 'test.jpg',
        original: 'test-original.jpg',
      },
    }
    vi.mocked(api.getShow).mockResolvedValue(mockShow)

    const { result } = renderHook(() => useShow('1'), { wrapper })

    await waitFor(() => {
      expect(result.current.show).toEqual(mockShow)
    })
  })
})

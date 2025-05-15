import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { Show } from '@/types'

export function useShow(id: string) {
  const { data, isLoading, isError, error } = useQuery<Show>({
    queryKey: ['show', id],
    queryFn: () => api.getShow(id),
    enabled: !!id,
  })

  return {
    show: data,
    isLoading,
    isError,
    error,
  }
}

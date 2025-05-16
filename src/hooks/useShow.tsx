import { api } from '@/lib/api'
import { Show } from '@/types'
import { useQuery } from '@tanstack/react-query'

export function useShow(id: string) {
  const { data, isLoading, error } = useQuery<Show>({
    queryKey: ['show', id],
    queryFn: () => api.getShow(id),
    enabled: !!id,
  })

  return {
    show: data,
    isLoading,
    error,
  }
}

import { useInfiniteQuery } from '@tanstack/react-query'

export function useShowList() {
  return useInfiniteQuery({
    queryKey: ['shows'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(`https://api.tvmaze.com/shows?page=${pageParam}`)
      return response.json()
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length === 250 ? lastPageParam + 1 : undefined
    },
    initialPageParam: 0,
  })
}

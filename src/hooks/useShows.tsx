import { api } from '@/lib/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function useShows({ pageSize = 20 }: { pageSize?: number } = {}) {
  const [uiPage, setUiPage] = useState(1)

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['shows'],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const shows = await api.getShows(pageParam)
      return { shows, page: pageParam }
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.shows.length > 0) return lastPage.page + 1
      return undefined
    },
    select: (data) => {
      const allShows = data.pages.flatMap((page) => page.shows)
      return {
        allShows,
        shows: allShows.slice(0, uiPage * pageSize),
      }
    },
  })

  const hasMoreLocal = data && data.shows.length < data.allShows.length

  const loadMore = () => {
    if (isFetching) return

    if (hasMoreLocal) {
      setUiPage((p) => p + 1)
      return
    }

    if (hasNextPage) fetchNextPage()
  }

  return {
    shows: data?.shows ?? [],
    isFetching,
    hasNextPage: hasMoreLocal || hasNextPage,
    fetchNextPage: loadMore,
  }
}

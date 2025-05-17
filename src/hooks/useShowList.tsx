import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { api } from '@/lib/api'
import { Show } from '@/types'

const UI_PAGE_SIZE = 25

export function useShowList() {
  const [uiPage, setUiPage] = useState(1)

  const { data, fetchNextPage, hasNextPage, isFetching, error } = useInfiniteQuery({
    queryKey: ['shows'],
    queryFn: async ({ pageParam = 0 }) => {
      const shows: Show[] = await api.getShows(pageParam)
      return { shows, page: pageParam }
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.shows.length > 0) return lastPage.page + 1
      return undefined
    },
    initialPageParam: 0,
  })

  const allShows = data ? data.pages.flatMap((page) => page.shows) : []
  const shows = allShows.slice(0, uiPage * UI_PAGE_SIZE)
  const hasMoreLocal = shows.length < allShows.length

  // Lógica para cargar más shows
  const loadMore = () => {
    if (hasMoreLocal) {
      setUiPage((p) => p + 1)
    } else if (hasNextPage) {
      fetchNextPage()
    }
  }

  return {
    shows,
    isFetching,
    error,
    hasNextPage: hasMoreLocal || hasNextPage,
    fetchNextPage: loadMore,
  }
}

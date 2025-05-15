import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'

const PAGE_SIZE = 20

export function useShowList() {
  const [page, setPage] = useState(0)

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['shows'],
    queryFn: api.getShows,
  })

  // shows current page
  const shows = data.slice(0, (page + 1) * PAGE_SIZE)
  const hasNextPage = shows.length < data.length

  const fetchNextPage = () => {
    setPage((prev) => prev + 1)
  }

  return {
    shows,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  }
}

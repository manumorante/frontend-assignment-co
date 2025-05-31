import { ShowList } from '@/components/shows'
import { ErrorAlert } from '@/components/ui'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useShows } from '@/hooks/useShows'
import { useRef } from 'react'

export default function ShowListPage() {
  const { shows, isFetching, hasNextPage, fetchNextPage, error } = useShows({
    pageSize: 42,
  })
  const loadMoreRef = useRef<HTMLButtonElement | null>(null)

  useInfiniteScroll({
    ref: loadMoreRef,
    callback: fetchNextPage,
    enabled: hasNextPage && !isFetching,
  })

  if (error) return <ErrorAlert message={error.message} />
  if (!isFetching && shows.length === 0) {
    return <ErrorAlert message="No shows are currently available." />
  }

  return (
    <div className="ShowListPage min-h-screen">
      <ShowList shows={shows} isLoading={isFetching} />

      {hasNextPage && (
        <button
          ref={loadMoreRef}
          className="button secondary my-4 w-full"
          onClick={fetchNextPage}
          disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Load More Shows'}
        </button>
      )}
    </div>
  )
}

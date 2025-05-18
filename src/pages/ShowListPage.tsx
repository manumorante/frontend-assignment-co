import { ShowList } from '@/components/shows'
import { Warn, Loading } from '@/components/ui'
import { useShows } from '@/hooks/useShows'
import { useRef } from 'react'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

export default function ShowListPage() {
  const { shows, isFetching, hasNextPage, fetchNextPage } = useShows({ pageSize: 42 })
  const loadMoreRef = useRef<HTMLButtonElement | null>(null)

  useInfiniteScroll({
    ref: loadMoreRef,
    callback: fetchNextPage,
    enabled: hasNextPage && !isFetching,
  })

  if (isFetching && shows.length === 0) return <Loading />
  if (!isFetching && shows.length === 0) return <Warn message="No shows are currently available." />

  return (
    <div className="ShowListPage min-h-screen">
      <ShowList shows={shows} />

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

import { ShowList } from '@/components'
import { Warn, Loading } from '@/components/ui'
import { useShows } from '@/hooks/useShows'

export default function ShowListPage() {
  const { shows, isFetching, hasNextPage, fetchNextPage } = useShows({ pageSize: 42 })

  if (isFetching && shows.length === 0) return <Loading />
  if (!isFetching && shows.length === 0) return <Warn message="No shows are currently available." />

  return (
    <div className="ShowListPage min-h-screen">
      <ShowList shows={shows} />

      {hasNextPage && (
        <button className="button secondary my-4 w-full" onClick={fetchNextPage}>
          Load More Shows
        </button>
      )}
    </div>
  )
}

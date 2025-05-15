import { ErrorMessage, Loading, ShowCard } from '@/components'
import { useShowList } from '@/hooks/useShowList'

export default function ShowList() {
  const { shows, isLoading, isError, fetchNextPage, hasNextPage } = useShowList()

  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage message="Error loading shows" />
  if (shows.length === 0) return <ErrorMessage message="No results" />

  return (
    <div className="ShowList w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>

      {hasNextPage && (
        <button className="button" onClick={() => fetchNextPage()}>
          Load More Shows
        </button>
      )}
    </div>
  )
}

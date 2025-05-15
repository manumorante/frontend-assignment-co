import { ErrorMessage, Loading, ShowCard } from '@/components'
import { useShowList } from '@/hooks/useShowList'

export default function ShowList() {
  const { shows, isLoading, error, fetchNextPage, hasNextPage } = useShowList()

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (shows.length === 0) return <ErrorMessage message="No results" />

  return (
    <div className="ShowList w-full">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
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

import { ErrorMessage, Loading, ShowList } from '@/components'
import { useShowList } from '@/hooks/useShowList'

export default function ShowListPage() {
  const { shows, isLoading, error, fetchNextPage, hasNextPage } = useShowList()

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (shows.length === 0) return <ErrorMessage message="There are no shows available to display." />

  return (
    <div className="ShowListPage">
      <ShowList shows={shows} />

      {hasNextPage && (
        <button className="button secondary my-4 w-full" onClick={() => fetchNextPage()}>
          Load More Shows
        </button>
      )}
    </div>
  )
}

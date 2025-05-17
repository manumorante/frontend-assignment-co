import { ShowList } from '@/components'
import { ErrorMessage, Loading } from '@/components/ui'
import { useShowList } from '@/hooks/useShowList'

export default function ShowListPage() {
  const { shows, isFetching, error, hasNextPage, fetchNextPage } = useShowList()

  if (isFetching && shows.length === 0) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (shows.length === 0) return <ErrorMessage message="There are no shows available to display." />

  return (
    <div className="ShowListPage">
      <div className="fixed top-3 left-3 z-50 rounded-lg bg-white p-3">
        {`Mostrando ${shows.length} shows`}
      </div>
      <ShowList shows={shows} />

      {hasNextPage && (
        <button className="button secondary my-4 w-full" onClick={fetchNextPage}>
          Load More Shows
        </button>
      )}
    </div>
  )
}

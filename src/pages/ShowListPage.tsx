import { Loading } from '@/components'
import { useShowList } from '@/hooks/useShowList'

export default function MovieListPage() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useShowList()

  return (
    <div>
      <h1>MovieListPage</h1>

      {isLoading && <Loading />}

      {data && (
        <div>
          {data.pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              {page.map((show: any) => (
                <div
                  key={show.id}
                  style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
                  <h3>{show.name}</h3>
                  <p>{show.summary?.replace(/<[^>]*>/g, '') || 'No summary available'}</p>
                </div>
              ))}
            </div>
          ))}

          {hasNextPage && (
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

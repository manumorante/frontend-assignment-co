import { FavoriteAction, Poster } from '@/components'
import { ErrorMessage, Loading } from '@/components/ui'
import { useShow } from '@/hooks/useShow'

export default function ShowProfile({ id }: { id: string }) {
  const { show, isLoading, error } = useShow(id)

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (!show) return <ErrorMessage message="Show not found" />

  return (
    <div className="w-full p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row sm:gap-6">
        <div className="w-full sm:w-1/3">
          <Poster alt={show.name} src={show.image.original} />
        </div>

        <div className="w-full p-3 sm:w-2/3">
          <h1 className="my-3 text-xl font-light text-zinc-950 sm:text-4xl">{show.name}</h1>

          <div className="flex w-full justify-between gap-8">
            <div className="ContentCol space-y-5">
              {/* Genres */}
              {show.genres && show.genres.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {show.genres.map((genre) => (
                    <span key={genre} className="tag">
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {/* Summary */}
              {show.summary && (
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: show.summary }} />
              )}
            </div>

            <div className="AsideCol flex flex-col gap-3">
              {/* Rating */}
              {show.rating?.average && (
                <div className="rounded-base flex flex-col items-center gap-1 border border-zinc-300 px-2.5 py-1.5 text-3xl font-light text-zinc-500">
                  {show.rating.average}
                  <span className="text-xs uppercase">Rating</span>
                </div>
              )}

              <FavoriteAction show={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

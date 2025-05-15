import { StarIcon } from '@heroicons/react/24/outline'
import { useShow } from '@/hooks/useShow'
import { ErrorMessage, Loading } from '@/components'
import Poster from './Poster'

export default function ShowProfile({ id }: { id: string }) {
  const { show, isLoading, isError, error } = useShow(id)

  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage message={error?.message || 'Error loading show'} />
  if (!show) return <ErrorMessage message="Show not found" />

  return (
    <div className="w-full p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row sm:gap-6">
        <div className="mb-4 w-full sm:mb-0 sm:w-1/3">
          <Poster alt={show.name} src={show.image.original} />
        </div>

        <div className="w-full sm:w-2/3">
          <h1 className="mb-3 text-xl font-bold sm:text-2xl">{show.name}</h1>

          {/* genres */}
          {show.genres && show.genres.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <span key={genre} className="rounded bg-gray-100 px-2 py-1 text-sm">
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Rating */}
          {show.rating?.average && (
            <div className="mb-3 flex items-center gap-1">
              <StarIcon className="h-5 w-5" />
              {show.rating.average}
            </div>
          )}

          {/* Resumen con HTML sanitizado */}
          {show.summary && (
            <div
              className="prose-sm max-w-none overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

import { FavoriteAction, Poster } from '@/components/shows'
import { ErrorAlert } from '@/components/ui'
import { useShow } from '@/hooks/useShow'
import { Show } from '@/types'
import parse from 'html-react-parser'

export default function ShowProfile({ id }: { id: string }) {
  const { show, isLoading, error } = useShow(id)

  if (isLoading) return <Skeleton />
  if (error) return <ErrorAlert message={error.message} />
  if (!show) return <ErrorAlert message="Show not found" />

  return (
    <div className="w-full p-1 sm:p-0">
      <div className="relative flex flex-col gap-6 sm:flex-row">
        <div className="flex w-full max-w-full flex-shrink-0 flex-grow-0 items-start sm:w-1/3 sm:max-w-none">
          <div className="w-3/4 sm:w-full">
            <Poster alt={show.name} src={show.image?.original} />
          </div>
        </div>

        <div className="absolute top-3 right-0 mb-2 flex flex-col items-center gap-5">
          <Rating rating={show.rating} />
          <FavoriteAction
            show={show}
            className="rounded-base flex h-12 w-12 font-light text-zinc-400 md:text-3xl"
          />
        </div>

        <div className="w-full space-y-4 sm:w-2/3 sm:pr-28">
          <h1 className="text-2xl font-light text-zinc-900 sm:text-4xl">{show.name}</h1>
          <Genres genres={show.genres} />
          {show.summary && (
            <div className="p-1 text-sm text-zinc-700 sm:text-base">{parse(show.summary)}</div>
          )}
        </div>
      </div>
    </div>
  )
}

function Genres({ genres }: { genres: Show['genres'] }) {
  if (genres.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span key={genre} className="tag">
          {genre}
        </span>
      ))}
    </div>
  )
}

function Rating({ rating }: { rating: Show['rating'] }) {
  if (!rating.average) return null
  return (
    <div className="rounded-base flex flex-col items-center gap-1 border border-zinc-300 px-2 py-1 text-xl font-light text-zinc-400 md:text-3xl">
      {rating.average}
      <span className="text-xs uppercase">Rating</span>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="w-full p-1 sm:p-0" role="status" aria-label="Loading show information">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex w-full max-w-full flex-shrink-0 flex-grow-0 items-start sm:w-1/3 sm:max-w-none">
          <div className="w-3/4 sm:w-full">
            <div className="skeleton-pulse aspect-[17/25]"></div>
          </div>
        </div>

        <div className="w-full space-y-4 sm:w-2/3">
          <div className="skeleton-pulse h-8 w-3/4"></div>
          <div className="skeleton-pulse h-48 w-full"></div>
        </div>
      </div>
    </div>
  )
}

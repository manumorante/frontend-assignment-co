import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

import { useShow } from '@/hooks/useShow'
import { ErrorMessage, Loading } from '@/components'
import Poster from './Poster'
import { useState } from 'react'

export default function ShowProfile({ id }: { id: string }) {
  const { show, isLoading, error } = useShow(id)
  const [isFavorite, setIsFavorite] = useState(false)

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message || 'Error loading show'} />
  if (!show) return <ErrorMessage message="Show not found" />

  return (
    <div className="w-full p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row sm:gap-6">
        <div className="mb-4 w-full sm:mb-0 sm:w-1/3">
          <Poster alt={show.name} src={show.image.original} />
        </div>

        <div className="w-full py-3 sm:w-2/3">
          <h1 className="mb-3 text-xl font-light sm:text-4xl">{show.name}</h1>

          <div className="flex w-full justify-between gap-6">
            <div className="ContentCol space-y-5">
              {/* Summary */}
              {show.summary && (
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: show.summary }} />
              )}

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
            </div>

            <div className="AsideCol flex flex-col gap-3">
              {/* Rating */}
              {show.rating?.average && (
                <div className="flex flex-col items-center gap-1 rounded-lg border border-neutral-300 px-2.5 py-1.5 text-3xl font-light text-neutral-500">
                  {show.rating.average}
                  <span className="text-xs uppercase">Rating</span>
                </div>
              )}

              <div
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-neutral-300 px-2.5 py-1.5 text-3xl font-light text-neutral-500">
                {isFavorite ? (
                  <StarSolid className="h-9 w-9" />
                ) : (
                  <StarOutline className="h-9 w-9" />
                )}

                <span className="text-xs uppercase">Favorite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

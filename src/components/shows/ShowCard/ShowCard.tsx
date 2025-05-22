import { FavoriteAction, Poster } from '@/components/shows'
import { cn } from '@/lib/utils'
import { Show } from '@/types'
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router'

type ShowCardProps = {
  show?: Show
  priority?: boolean
  isLoading?: boolean
}

const cardCx = cn(
  'ShowCard',
  'rounded-base',
  'bg-white/70 text-zinc-600 md:hover:bg-white md:hover:text-black',
  'shadow-lg/5',
  'transition-colors duration-300 ease-out',
  'flex flex-col',
)

export default function ShowCard({ show, priority = false, isLoading }: ShowCardProps) {
  if (isLoading) return <Skeleton />
  if (!show) return null

  const singleUrl = `/shows/${show.id}`

  return (
    <div className={cardCx}>
      <Link to={singleUrl}>
        <Poster
          alt={show.name}
          src={show.image?.medium}
          className="md:hover:scale-[1.02]"
          priority={priority}
        />
      </Link>
      <div className="Meta flex flex-1 flex-col justify-between">
        <Link to={singleUrl}>
          <h3 className="px-2 pt-3 leading-tight font-medium tracking-tight">{show.name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5 p-2">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span className="text-zinc-400">{show.rating.average}</span>
          </div>
          <FavoriteAction show={show} className="h-9 w-9 p-2" />
        </div>
      </div>
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className={cardCx}>
      <div className="rounded-base skeleton-pulse aspect-[17/25]" />
      <div className="flex flex-1 flex-col justify-between gap-2 p-2">
        <div className="skeleton-pulse h-6 w-3/4" />
        <div className="skeleton-pulse h-5 w-16" />
      </div>
    </div>
  )
}

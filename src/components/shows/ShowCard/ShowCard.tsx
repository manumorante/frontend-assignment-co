import { FavoriteAction, Poster } from '@/components/shows'
import { Show } from '@/types'
import cx from 'clsx'
import { Link } from 'react-router'
import { StarIcon } from '@heroicons/react/24/outline'

export default function ShowCard({ show, priority = false }: { show: Show; priority?: boolean }) {
  const singleUrl = `/shows/${show.id}`

  return (
    <div
      className={cx(
        'ShowCard',
        'rounded-base',
        'bg-white/70 text-zinc-600 md:hover:bg-white md:hover:text-black',
        'shadow-xl/5',
        'transition-colors duration-300 ease-out',
        'flex flex-col',
      )}>
      <Link to={singleUrl}>
        <Poster
          alt={show.name}
          src={show.image?.medium}
          className="md:hover:scale-[1.02]"
          priority={priority}
        />
      </Link>
      <div className="Meta flex flex-1 flex-col justify-between gap-2 p-2">
        <Link to={singleUrl}>
          <h3 className="leading-tight font-medium tracking-tight">{show.name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5 font-light">
            <StarIcon className="h-5 w-5" />
            {show.rating.average}
          </div>
          <FavoriteAction show={show} />
        </div>
      </div>
    </div>
  )
}

import { Poster } from '@/components'
import { Show } from '@/types'
import { Link } from 'react-router'
import cx from 'clsx'

export default function ShowCard({ show, priority = false }: { show: Show; priority?: boolean }) {
  const singleUrl = `/shows/${show.id}`

  return (
    <Link
      to={singleUrl}
      className={cx(
        'ShowCard group',
        'rounded-base p-2 md:p-3',
        'bg-white/0 text-zinc-500 md:hover:bg-white md:hover:text-black',
        'transition-colors duration-300 ease-out',
      )}>
      <Poster
        alt={show.name}
        src={show.image.medium}
        className="md:group-hover:scale-105"
        priority={priority}
      />
      <h3 className="p-2 font-light">{show.name}</h3>
    </Link>
  )
}

import { Poster } from '@/components'
import { Show } from '@/types'
import { Link } from 'react-router'

export default function ShowCard({ show }: { show: Show }) {
  const singleUrl = `/shows/${show.id}`

  return (
    <Link
      to={singleUrl}
      className="ShowCard group rounded-base bg-white/0 p-3 text-zinc-500 transition-colors duration-300 ease-out md:hover:bg-white md:hover:text-black">
      <Poster alt={show.name} src={show.image.medium} className="md:group-hover:scale-105" />
      <h3 className="p-2 font-light">{show.name}</h3>
    </Link>
  )
}

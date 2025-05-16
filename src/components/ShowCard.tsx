import { Show } from '@/types'
import { Link } from 'react-router'
import Poster from './Poster'

export default function ShowCard({ show }: { show: Show }) {
  const singleUrl = `/shows/${show.id}`

  return (
    <Link
      to={singleUrl}
      className="ShowCard rounded-lg bg-white/0 p-3 text-zinc-500 transition-colors duration-300 ease-out hover:bg-white hover:text-black">
      <Poster alt={show.name} src={show.image.medium} />
      <h3 className="p-2 font-light">{show.name}</h3>
    </Link>
  )
}

import { Show } from '@/types'
import { Link } from 'react-router'
import Poster from './Poster'

export default function ShowCard({ show }: { show: Show }) {
  const singleUrl = `/shows/${show.id}`

  return (
    <div className="ShowCard">
      <Link to={singleUrl}>
        <Poster alt={show.name} src={show.image.medium} />
        <h3>{show.name}</h3>
      </Link>
    </div>
  )
}

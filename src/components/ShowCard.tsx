import { Show } from '@/types'
import { Link } from 'react-router'

export default function ShowCard({ show }: { show: Show }) {
  const singleUrl = `/shows/${show.id}`

  return (
    <div className="ShowCard">
      <Link to={singleUrl}>
        <img
          src={show.image?.medium}
          alt={`Image of ${show.name}`}
          className="h-auto w-full max-w-full"
        />

        <h3>{show.name}</h3>
      </Link>
    </div>
  )
}

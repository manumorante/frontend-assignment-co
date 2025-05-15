import { Show } from '@/types'

export default function ShowCard({ show }: { show: Show }) {
  return (
    <div className="ShowCard">
      <h3>{show.name}</h3>
      <p>{show.summary?.replace(/<[^>]*>/g, '') || 'No summary available'}</p>
      <img src={show.image?.medium} alt={`Image of ${show.name}`} />
    </div>
  )
}

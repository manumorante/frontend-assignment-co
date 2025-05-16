import { ShowCard } from '@/components'
import { Show } from '@/types'

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <div className="ShowList grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  )
}

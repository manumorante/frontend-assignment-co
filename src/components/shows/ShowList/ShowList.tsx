import { ShowCard } from '@/components/shows'
import { Show } from '@/types'
import cx from 'clsx'

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <div
      className={cx(
        'ShowList grid w-full',
        'gap-x-3 gap-y-5 lg:gap-x-3',
        'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6',
      )}>
      {shows.map((show, idx) => (
        <ShowCard key={show.id} show={show} priority={idx < 5} />
      ))}
    </div>
  )
}

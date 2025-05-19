import { ShowCard } from '@/components/shows'
import { Show } from '@/types'
import cx from 'clsx'

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <div
      className={cx(
        'ShowList grid w-full',
        'lg:gap-x-3 lg:gap-y-5',
        'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6',
      )}>
      {shows.map((show, idx) => (
        <ShowCard key={show.id} show={show} priority={idx < 5} />
      ))}
    </div>
  )
}

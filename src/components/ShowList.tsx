import { ShowCard } from '@/components'
import { Show } from '@/types'
import cx from 'clsx'

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <div
      className={cx(
        'ShowList grid w-full',
        'lg:gap-2',
        'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6',
      )}>
      {shows.map((show, idx) => (
        <ShowCard key={show.id} show={show} priority={idx < 5} />
      ))}
    </div>
  )
}

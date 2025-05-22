import { ShowCard } from '@/components/shows'
import { cn } from '@/lib/utils'
import { Show } from '@/types'

type ShowListProps = {
  shows: Show[]
  isLoading?: boolean
}

const gridCx = cn(
  'ShowList grid w-full',
  'gap-x-5 gap-y-5 lg:gap-x-5',
  'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6',
)

const SKELETON_ITEMS = 18
const PRIORITY_THRESHOLD = 5

export default function ShowList({ shows, isLoading }: ShowListProps) {
  return (
    <div className={gridCx}>
      {isLoading
        ? Array.from({ length: SKELETON_ITEMS }).map((_, idx) => (
            <ShowCard key={`skeleton-${idx}`} isLoading />
          ))
        : shows.map((show, idx) => (
            <ShowCard key={show.id} show={show} priority={idx < PRIORITY_THRESHOLD} />
          ))}
    </div>
  )
}

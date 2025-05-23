import { useEpisodes } from '@/hooks/useEpisodes'
import { cn } from '@/lib/utils'
import { Episode, Season, Show } from '@/types'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function EpisodeList({ showId }: { showId: Show['id'] }) {
  const { seasons, isFetching } = useEpisodes(showId)

  if (isFetching) return <Skeleton />

  return (
    <div className={cn('ShowList space-y-4')}>
      {seasons.map((season, idx) => (
        <SeasonPanel key={season.season} season={season} open={idx === 0} />
      ))}
    </div>
  )
}

function SeasonPanel({ season, open }: { season: Season; open: boolean }) {
  return (
    <details open={open} className="rounded-base bg-zinc-50">
      <Summary>Season {season.season}</Summary>
      <div className="space-y-2 px-2 pt-1 pb-2">
        {season.episodes.map((episode) => (
          <EpisodeItem key={episode.id} episode={episode} seasonNumber={season.season} />
        ))}
      </div>
    </details>
  )
}

function EpisodeItem({ episode, seasonNumber }: { episode: Episode; seasonNumber: number }) {
  return (
    <div className={cn('EpisodeItem group flex items-center', 'px-2 py-2 md:px-4')}>
      <span
        className={cn('font-mono text-lg font-light text-black', 'mr-4', 'min-w-[56px] text-left')}>
        {seasonNumber}x{String(episode.number).padStart(2, '0')}
      </span>
      <span className="truncate text-base font-light text-zinc-700">{episode.name}</span>
    </div>
  )
}

function Summary({ children }: { children: React.ReactNode }) {
  return (
    <summary
      className={cn(
        'flex cursor-pointer items-center gap-2 px-4 py-3 select-none',
        'rounded-base bg-white font-medium text-zinc-700',
        'text-lg',
      )}
      style={{ outline: 'none' }}>
      <ChevronRightIcon className="details-open:rotate-90 mr-1 h-5 w-5 transition-transform duration-200" />
      {children}
    </summary>
  )
}

function Skeleton() {
  return (
    <div className="space-y-3">
      <div className="rounded-base bg-zinc-50">
        <div className="rounded-base bg-white p-3">
          <div className="skeleton-pulse h-6 w-32"></div>
        </div>

        <div className="space-y-2 p-3">
          <div className="skeleton-pulse h-8"></div>
          <div className="skeleton-pulse h-8"></div>
          <div className="skeleton-pulse h-8"></div>
        </div>
      </div>
    </div>
  )
}

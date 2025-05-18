import { Show, Season, Episode } from '@/types'
import cx from 'clsx'
import { useEpisodes } from '@/hooks/useEpisodes'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function EpisodeList({ showId }: { showId: Show['id'] }) {
  const { seasons } = useEpisodes(showId)

  return (
    <div className={cx('ShowList space-y-4')}>
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
    <div className={cx('EpisodeItem group flex items-center', 'px-2 py-2 md:px-4')}>
      <span
        className={cx('font-mono text-lg font-light text-black', 'mr-4', 'min-w-[56px] text-left')}>
        {seasonNumber}x{String(episode.number).padStart(2, '0')}
      </span>
      <span className="truncate text-base font-light text-zinc-700">{episode.name}</span>
    </div>
  )
}

function Summary({ children }: { children: React.ReactNode }) {
  return (
    <summary
      className={cx(
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

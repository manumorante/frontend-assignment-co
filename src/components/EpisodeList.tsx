import { Show } from '@/types'
import cx from 'clsx'
import { useEpisodes } from '@/hooks/useEpisodes'

export default function EpisodeList({ showId }: { showId: Show['id'] }) {
  const { episodes } = useEpisodes(showId)

  return (
    <div className={cx('ShowList space-y-2')}>
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className={cx(
            'EpisodeItem group flex items-center',
            'rounded-base px-2 py-2 md:px-4',
            'bg-zinc-50 text-zinc-500 md:hover:bg-white md:hover:text-black',
            'transition-colors duration-300 ease-out',
            'border-b border-zinc-200 last:border-b-0',
          )}>
          <span
            className={cx(
              'font-mono text-lg font-light text-black',
              'mr-4',
              'min-w-[56px] text-left',
            )}>
            {episode.season}x{String(episode.number).padStart(2, '0')}
          </span>
          <span className="truncate text-base font-light text-zinc-700">{episode.name}</span>
        </div>
      ))}
    </div>
  )
}

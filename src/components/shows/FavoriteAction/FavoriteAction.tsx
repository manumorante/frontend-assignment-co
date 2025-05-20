import { useFavoriteSignal } from '@/hooks/useFavoriteSignal'
import { Show } from '@/types'
import { HeartIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'

export default function FavoriteAction({
  show,
  className = 'w-7 h-7',
}: {
  show: Show
  className?: string
}) {
  const { checkIsFavorite, addFavorite, removeFavorite } = useFavoriteSignal()
  const isFavorite = checkIsFavorite(show.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(show.id)
    } else {
      addFavorite(show)
    }
  }

  const tooltipText = isFavorite ? 'Remove from favorites' : 'Add to favorites'

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-label={tooltipText}
      aria-pressed={isFavorite}
      title={tooltipText}
      className={cx('flex cursor-pointer items-center justify-center', className)}>
      <HeartIcon
        className={cx(
          'h-full w-full',
          'transition-all duration-200 ease-out',
          'md:hover:scale-120',

          { 'fill-rose-700 text-rose-700': isFavorite },
          {
            'fill-rose-700/0 text-rose-800 md:hover:fill-rose-700 md:hover:text-rose-700':
              !isFavorite,
          },
        )}
      />
    </button>
  )
}

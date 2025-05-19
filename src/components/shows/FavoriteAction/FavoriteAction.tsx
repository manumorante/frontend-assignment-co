import { useFavoriteSignal } from '@/hooks/useFavoriteSignal'
import { Show } from '@/types'
import { HeartIcon as HearIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HearIconSolid } from '@heroicons/react/24/solid'
import cx from 'clsx'

export default function FavoriteAction({
  show,
  className = 'w-5 h-5',
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
      className={cx('cursor-pointer', className)}>
      {isFavorite ? (
        <HearIconSolid className="h-full w-full text-rose-800" />
      ) : (
        <HearIconOutline className="h-full w-full md:hover:scale-105 md:hover:text-rose-800" />
      )}
    </button>
  )
}

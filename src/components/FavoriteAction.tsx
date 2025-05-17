import { useFavoriteSignal } from '@/hooks/useFavoriteSignal'
import { Show } from '@/types'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

export default function FavoriteAction({ show }: { show: Show }) {
  const { checkIsFavorite, addFavorite, removeFavorite } = useFavoriteSignal()
  const isFavorite = checkIsFavorite(show.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(show.id)
    } else {
      addFavorite(show)
    }
  }

  const iconCx = 'h-6 w-6 sm:h-8 sm:w-8'

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
      className="rounded-base flex cursor-pointer flex-col items-center gap-1 border border-zinc-300 px-2 py-1 text-3xl font-light text-zinc-400">
      {isFavorite ? <StarSolid className={iconCx} /> : <StarOutline className={iconCx} />}
      <span className="text-xs uppercase">Favorite</span>
    </button>
  )
}

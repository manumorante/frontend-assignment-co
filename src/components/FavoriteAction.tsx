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

  return (
    <div
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
      className="rounded-base flex cursor-pointer flex-col items-center gap-1 border border-zinc-300 px-2.5 py-1.5 text-3xl font-light text-zinc-500">
      {isFavorite ? <StarSolid className="h-9 w-9" /> : <StarOutline className="h-9 w-9" />}
      <span className="text-xs uppercase">Favorite</span>
    </div>
  )
}

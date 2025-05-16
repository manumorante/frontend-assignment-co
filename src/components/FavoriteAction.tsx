import { useFavoritesStore } from '@/stores/favorites'
import { Show } from '@/types'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { useCallback } from 'react'

export default function FavoriteAction({ show }: { show: Show }) {
  const addFavorite = useFavoritesStore((state) => state.addFavorite)
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)
  const isFavorite = useFavoritesStore((state) => state.checkIsFavorite(show.id))

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      removeFavorite(show.id)
    } else {
      addFavorite(show)
    }
  }, [isFavorite, addFavorite, removeFavorite, show])

  return (
    <div
      onClick={toggleFavorite}
      className="flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-zinc-300 px-2.5 py-1.5 text-3xl font-light text-zinc-500">
      {isFavorite ? <StarSolid className="h-9 w-9" /> : <StarOutline className="h-9 w-9" />}

      <span className="text-xs uppercase">Favorite</span>
    </div>
  )
}

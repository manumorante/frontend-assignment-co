import { EmptyState, ShowList } from '@/components'
import { useFavoritesStore } from '@/stores/favorites'
import { StarIcon } from '@heroicons/react/24/outline'

export default function ShowFavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  const hasFavorites = favorites.length > 0

  return (
    <div className="container mx-auto px-4 py-6">
      {hasFavorites ? (
        <ShowList shows={favorites} />
      ) : (
        <EmptyState
          icon={<StarIcon className="h-12 w-12 text-zinc-400/60" />}
          title="You haven't saved any series as a favorite yet."
          actionTo="/shows"
        />
      )}
    </div>
  )
}

import { ShowList } from '@/components/shows'
import { EmptyState } from '@/components/ui'
import { useFavoriteSignal } from '@/hooks/useFavoriteSignal'
import { StarIcon } from '@heroicons/react/24/outline'

export default function ShowFavoritesPage() {
  const { favorites } = useFavoriteSignal()

  return (
    <>
      {favorites.length > 0 ? (
        <ShowList shows={favorites} />
      ) : (
        <EmptyState
          icon={<StarIcon className="h-12 w-12 text-zinc-400/60" />}
          title="You haven't saved any series as a favorite yet."
          actionTo="/shows"
        />
      )}
    </>
  )
}

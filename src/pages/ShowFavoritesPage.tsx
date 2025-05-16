import { useFavoritesStore } from '@/stores/favorites'

export default function ShowFavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  // const hasFavorites = favorites.length > 0

  return (
    <div>
      <h1>ShowFavoritesPage</h1>

      {favorites.map((show) => {
        return <>{show.id}</>
      })}
    </div>
  )
}

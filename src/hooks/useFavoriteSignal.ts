import { useSignals } from '@preact/signals-react/runtime'
import { favoritesSignal, addFavorite, removeFavorite, checkIsFavorite } from '@/stores/favorites'

export function useFavoriteSignal() {
  useSignals()
  return {
    favorites: favoritesSignal.value,
    addFavorite,
    removeFavorite,
    checkIsFavorite,
  }
}

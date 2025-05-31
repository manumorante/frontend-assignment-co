import { addFavorite, checkIsFavorite, favoritesSignal, removeFavorite } from '@/stores/favorites'
import { useSignals } from '@preact/signals-react/runtime'

export function useFavoriteSignal() {
  useSignals()
  return {
    favorites: favoritesSignal.value,
    addFavorite,
    removeFavorite,
    checkIsFavorite,
  }
}

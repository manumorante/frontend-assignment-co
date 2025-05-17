import { persistSignal } from '@/lib/persistSignal'
import { Show } from '@/types'

export const favoritesSignal = persistSignal<Show[]>('favorites-storage', [])

export function addFavorite(show: Show) {
  if (!favoritesSignal.value.some(({ id }) => id === show.id)) {
    favoritesSignal.value = [...favoritesSignal.value, show]
  }
}

export function removeFavorite(id: Show['id']) {
  favoritesSignal.value = favoritesSignal.value.filter((show) => show.id !== id)
}

export function checkIsFavorite(id: Show['id']): boolean {
  return favoritesSignal.value.some((show) => show.id === id)
}

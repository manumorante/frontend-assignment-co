import { Show } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  favorites: Show[]
  addFavorite: (show: Show) => void
  removeFavorite: (id: Show['id']) => void
  checkIsFavorite: (id: Show['id']) => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (show) => {
        set((state) =>
          state.favorites.some(({ id }) => id === show.id)
            ? state
            : { favorites: [...state.favorites, show] },
        )
      },
      removeFavorite: (id) => {
        set((state) => {
          const favorites = state.favorites.filter((show) => show.id !== id)
          return favorites.length === state.favorites.length ? state : { favorites }
        })
      },
      checkIsFavorite: (id) => {
        return get().favorites.some((show) => show.id === id)
      },
    }),
    { name: 'favorites-storage' },
  ),
)

import { Show } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  // Data
  favorites: Show[]

  // Actions
  addFavorite: (show: Show) => void
  removeFavorite: (showId: number | string) => void
  checkIsFavorite: (showId: number | string) => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      // Data
      favorites: [],

      // Actions
      addFavorite: (show) => {
        const { favorites } = get()
        // Evitar duplicados comprobando si ya existe
        if (!favorites.some((fav) => fav.id === show.id)) {
          set((state) => ({ favorites: [...state.favorites, show] }))
        }
      },

      removeFavorite: (showId) => {
        set((state) => ({
          favorites: state.favorites.filter((show) => show.id !== showId),
        }))
      },

      checkIsFavorite: (showId) => {
        return get().favorites.some((show) => show.id === showId)
      },
    }),
    { name: 'favorites-storage' },
  ),
)

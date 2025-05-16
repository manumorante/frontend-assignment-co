import { Show } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  // Data
  favorites: Show[]

  // Actions
  addFavorite: (show: Show) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      // Data
      favorites: [],

      // Actions
      addFavorite: (show) => {
        set((state) => ({ favorites: [...state.favorites, show] }))
      },
    }),
    { name: 'favorites-storage' },
  ),
)

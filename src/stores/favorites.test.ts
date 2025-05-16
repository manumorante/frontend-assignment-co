import { useFavoritesStore } from '@/stores/favorites'
import { mockShow } from '@/test/mocks'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useFavoritesStore', () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favorites: [] })
  })

  it('adds a favorite', () => {
    useFavoritesStore.getState().addFavorite(mockShow)
    expect(useFavoritesStore.getState().favorites).toContainEqual(mockShow)
  })

  it('does not add duplicates', () => {
    useFavoritesStore.getState().addFavorite(mockShow)
    useFavoritesStore.getState().addFavorite(mockShow)
    expect(useFavoritesStore.getState().favorites).toHaveLength(1)
  })

  it('removes a favorite', () => {
    useFavoritesStore.getState().addFavorite(mockShow)
    useFavoritesStore.getState().removeFavorite('1')
    expect(useFavoritesStore.getState().favorites).toHaveLength(0)
  })

  it('checkIsFavorite works', () => {
    expect(useFavoritesStore.getState().checkIsFavorite('1')).toBe(false)
    useFavoritesStore.getState().addFavorite(mockShow)
    expect(useFavoritesStore.getState().checkIsFavorite('1')).toBe(true)
  })
})

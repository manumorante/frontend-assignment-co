import { addFavorite, checkIsFavorite, favoritesSignal, removeFavorite } from '@/stores/favorites'
import { mockShow } from '@/test/mocks'
import { beforeEach, describe, expect, it } from 'vitest'

describe('favorites', () => {
  beforeEach(() => {
    favoritesSignal.value = []
  })

  describe('adding favorites', () => {
    it('adds a favorite', () => {
      addFavorite(mockShow)
      expect(favoritesSignal.value).toContainEqual(mockShow)
    })

    it('does not add duplicates', () => {
      addFavorite(mockShow)
      addFavorite(mockShow)
      expect(favoritesSignal.value).toHaveLength(1)
    })
  })

  describe('managing favorites', () => {
    it('removes a favorite', () => {
      addFavorite(mockShow)
      removeFavorite('1')
      expect(favoritesSignal.value).toHaveLength(0)
    })

    it('checks if show is favorite', () => {
      expect(checkIsFavorite('1')).toBe(false)
      addFavorite(mockShow)
      expect(checkIsFavorite('1')).toBe(true)
    })
  })
})

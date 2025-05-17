import ShowFavoritesPage from '@/pages/ShowFavoritesPage'
import { favoritesSignal } from '@/stores/favorites'
import { mockShow } from '@/test/mocks'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ShowFavoritesPage', () => {
  beforeEach(() => {
    favoritesSignal.value = []
  })

  it('shows the empty state if there are no favorites', () => {
    render(
      <MemoryRouter>
        <ShowFavoritesPage />
      </MemoryRouter>,
    )
    expect(screen.getByText(/you haven't saved any series as a favorite yet/i)).toBeInTheDocument()
  })

  it('shows the favorites list if there are favorites', () => {
    favoritesSignal.value = [mockShow]
    render(
      <MemoryRouter>
        <ShowFavoritesPage />
      </MemoryRouter>,
    )
    expect(screen.getByText(new RegExp(mockShow.name, 'i'))).toBeInTheDocument()
  })
})

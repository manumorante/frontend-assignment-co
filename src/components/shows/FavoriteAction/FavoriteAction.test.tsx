import { FavoriteAction } from '@/components/shows'
import { favoritesSignal } from '@/stores/favorites'
import { mockShow } from '@/test/mocks'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

describe('FavoriteAction', () => {
  beforeEach(() => {
    favoritesSignal.value = []
  })

  it('shows outline star if not favorite', () => {
    render(<FavoriteAction show={mockShow} />)
    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument()
  })

  it('shows solid star if favorite', () => {
    favoritesSignal.value = [mockShow]
    render(<FavoriteAction show={mockShow} />)
    expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument()
  })

  it('toggles favorite on click', () => {
    render(<FavoriteAction show={mockShow} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument()
  })
})

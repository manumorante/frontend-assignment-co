import { render, screen } from '@testing-library/react'
import Header from './Header'
import { describe, it, expect } from 'vitest'

// @TODO: Extract nav routes to a separate file for reuse in Header and tests.

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('TV Shows')).toBeInTheDocument()
    expect(screen.getByText('Favorites')).toBeInTheDocument()
  })
})

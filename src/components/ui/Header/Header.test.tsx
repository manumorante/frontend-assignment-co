import { Header } from '@/components/ui'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

// @TODO: Extract nav routes to a separate file for reuse in Header and tests.

describe('Header', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('TV Shows')).toBeInTheDocument()
    expect(screen.getByText('Favorites')).toBeInTheDocument()
  })
})

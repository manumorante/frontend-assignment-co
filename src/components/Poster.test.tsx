import { render, screen, waitFor } from '@testing-library/react'
import Poster from './Poster'
import { describe, it, expect } from 'vitest'

describe('Poster', () => {
  it('shows skeleton while loading', () => {
    render(<Poster alt="Test Poster" src="/fake-image.jpg" />)
    expect(document.querySelector('.skeleton-pulse')).toBeInTheDocument()
  })

  it('shows image when loaded', async () => {
    render(<Poster alt="Loaded Poster" src="/fake-image.jpg" />)
    const img = screen.getByRole('img')
    await waitFor(() => {
      img.dispatchEvent(new Event('load'))
    })
    await waitFor(() => {
      expect(img).toBeInTheDocument()
    })
  })

  it('shows fallback on error', async () => {
    render(<Poster alt="No image" src="/broken-image.jpg" />)
    const img = screen.getByRole('img')
    await waitFor(() => {
      img.dispatchEvent(new Event('error'))
    })
    await waitFor(() => {
      expect(screen.getByText('No image')).toBeInTheDocument()
    })
  })
})

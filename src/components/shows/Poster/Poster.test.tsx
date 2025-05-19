import { Poster } from '@/components/shows'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Poster', () => {
  it('renders image with correct src and alt', () => {
    render(<Poster alt="Test Poster" src="/fake-image.jpg" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', '/fake-image.jpg')
    expect(img).toHaveAttribute('alt', 'Test Poster')
  })

  it('handles image loading errors', () => {
    render(<Poster alt="Error Image" src="/broken-image.jpg" />)
    const img = screen.getByRole('img')
    fireEvent.error(img)
    expect(screen.getByText('Error Image')).toBeInTheDocument()
  })

  it('handles missing image source', () => {
    render(<Poster alt="No Source" />)
    expect(screen.getByText('No Source')).toBeInTheDocument()
  })
})

import { Poster } from '@/components/shows'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

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

  it('has aria-busy true while loading', () => {
    const { container } = render(<Poster alt="Test Poster" src="/fake-image.jpg" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveAttribute('aria-busy', 'true')
  })

  it('applies className', () => {
    render(<Poster alt="Test Poster" src="/fake-image.jpg" className="test-class" />)
    expect(document.querySelector('.test-class')).toBeInTheDocument()
  })
})

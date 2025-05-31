import { Poster } from '@/components/shows'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Poster', () => {
  it('renders image', () => {
    render(<Poster alt="Test" src="/test.jpg" />)
    expect(screen.getByRole('img')).toHaveAttribute('src', '/test.jpg')
  })

  it('shows skeleton when loading', () => {
    render(<Poster isLoading />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('shows no-image when no src or error', () => {
    const { rerender } = render(<Poster alt="Test" src="" />)
    expect(screen.getByTestId('no-image')).toBeInTheDocument()

    rerender(<Poster alt="Test" src="/error.jpg" />)
    fireEvent.error(screen.getByRole('img'))
    expect(screen.getByTestId('no-image')).toBeInTheDocument()
  })
})

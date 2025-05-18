import { Loading } from '@/components/ui'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Loading', () => {
  it('renders the spinner with role status and loading text', () => {
    render(<Loading />)
    const status = screen.getByRole('status')
    expect(status).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})

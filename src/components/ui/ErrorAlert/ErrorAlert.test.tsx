import { ErrorAlert } from '@/components/ui'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('ErrorAlert', () => {
  it('displays the error message correctly', () => {
    const testMessage = 'An error has occurred'
    render(<ErrorAlert message={testMessage} />)
    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })
})

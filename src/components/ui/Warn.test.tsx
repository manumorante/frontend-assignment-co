import { Warn } from '@/components/ui'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Warn', () => {
  it('displays the error message correctly', () => {
    const testMessage = 'An error has occurred'
    render(<Warn message={testMessage} />)
    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })
})

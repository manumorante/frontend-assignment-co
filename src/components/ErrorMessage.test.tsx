import { render, screen } from '@testing-library/react'
import ErrorMessage from './ErrorMessage'
import { describe, it, expect } from 'vitest'

describe('ErrorMessage', () => {
  it('muestra el mensaje de error correctamente', () => {
    const testMessage = 'Ha ocurrido un error'
    render(<ErrorMessage message={testMessage} />)
    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })
})

import { ErrorMessage } from '@/components/ui'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('ErrorMessage', () => {
  it('muestra el mensaje de error correctamente', () => {
    const testMessage = 'Ha ocurrido un error'
    render(<ErrorMessage message={testMessage} />)
    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })
})

import { useShow } from '@/hooks/useShow'
import { mockShow } from '@/test/mocks'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, Mock, vi } from 'vitest'
import ShowProfile from './ShowProfile'

vi.mock('@/hooks/useShow')
const mockedUseShow = useShow as Mock

describe('ShowProfile', () => {
  it('shows loading', () => {
    mockedUseShow.mockReturnValue({ show: undefined, isLoading: true, error: null })
    render(<ShowProfile id="1" />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('shows error', () => {
    mockedUseShow.mockReturnValue({
      show: undefined,
      isLoading: false,
      error: { name: 'Error', message: 'fail' },
    })
    render(<ShowProfile id="1" />)
    expect(screen.getByText(/fail/i)).toBeInTheDocument()
  })

  it('shows not found', () => {
    mockedUseShow.mockReturnValue({ show: undefined, isLoading: false, error: null })
    render(<ShowProfile id="1" />)
    expect(screen.getByText(/show not found/i)).toBeInTheDocument()
  })

  it('shows show data', () => {
    mockedUseShow.mockReturnValue({ show: mockShow, isLoading: false, error: null })
    render(<ShowProfile id="1" />)
    expect(screen.getByText(/test show/i)).toBeInTheDocument()
    expect(screen.getByText(/drama/i)).toBeInTheDocument()
    expect(screen.getByText(/comedy/i)).toBeInTheDocument()
    expect(screen.getByText(/rating/i)).toBeInTheDocument()
    expect(screen.getByText('8.5')).toBeInTheDocument()
  })
})

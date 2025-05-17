import { describe, it, expect } from 'vitest'
import { persistSignal } from './persistSignal'

describe('persistSignal', () => {
  it('should create and update signal value', () => {
    const signal = persistSignal('test-key', 'initial')
    expect(signal.value).toBe('initial')

    signal.value = 'updated'
    expect(signal.value).toBe('updated')
  })
})

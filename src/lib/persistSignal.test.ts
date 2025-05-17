import { persistSignal } from '@/lib/persistSignal'
import { describe, expect, it } from 'vitest'

describe('persistSignal', () => {
  it('should create and update signal value', () => {
    const signal = persistSignal('test-key', 'initial')
    expect(signal.value).toBe('initial')

    signal.value = 'updated'
    expect(signal.value).toBe('updated')
  })
})

import { signal, Signal } from '@preact/signals-react'

export function persistSignal<T>(key: string, initialValue: T): Signal<T> {
  let value = initialValue
  try {
    const stored = localStorage.getItem(key)
    if (stored) {
      value = JSON.parse(stored)
    }
  } catch {
    localStorage.removeItem(key)
  }

  const sig = signal<T>(value)

  sig.subscribe((val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val))
    } catch {
      localStorage.removeItem(key)
    }
  })

  return sig
}

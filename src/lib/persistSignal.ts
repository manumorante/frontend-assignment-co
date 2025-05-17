import { signal, Signal } from '@preact/signals-react'

export function persistSignal<T>(key: string, initialValue: T): Signal<T> {
  let value = initialValue
  const stored = localStorage.getItem(key)
  if (stored) value = JSON.parse(stored)
  const sig = signal<T>(value)
  sig.subscribe((val) => localStorage.setItem(key, JSON.stringify(val)))
  return sig
}

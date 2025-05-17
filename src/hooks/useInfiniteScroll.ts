import { useEffect, RefObject } from 'react'

interface Props<T extends Element> {
  ref: RefObject<T | null>
  callback: () => void
  enabled: boolean
}

export function useInfiniteScroll<T extends Element>({ ref, callback, enabled }: Props<T>) {
  useEffect(() => {
    if (!enabled) return

    const node = ref.current
    if (!node) return

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback()
        }
      },
      { threshold: 1.0 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [ref, callback, enabled])
}

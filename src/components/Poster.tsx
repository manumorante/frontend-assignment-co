import { useState } from 'react'

interface Props {
  alt: string
  src?: string
  className?: string
  priority?: boolean
}

export default function Poster({ alt, src, className, priority = false }: Props) {
  const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>('loading')

  return (
    <div
      className={`rounded-base relative aspect-[17/25] w-full overflow-hidden shadow-md transition-transform duration-300 ease-out ${className}`}
      aria-busy={status === 'loading'}>
      {status === 'loading' && (
        <div className="skeleton-pulse absolute inset-0 z-10" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {status === 'error' ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-200 text-sm text-zinc-400">
          {alt || 'No image'}
        </div>
      ) : (
        <img
          src={src || ''}
          alt={alt}
          className="relative h-full w-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}

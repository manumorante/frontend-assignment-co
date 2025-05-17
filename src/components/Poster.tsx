import { useState } from 'react'

export default function Poster({ alt, src }: { alt: string; src: string }) {
  const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>('loading')

  return (
    <div
      className="rounded-base relative aspect-[17/25] w-full overflow-hidden shadow-md"
      aria-busy={status === 'loading'}>
      {status === 'loading' && <div className="skeleton-pulse absolute inset-0 z-10" />}
      {status === 'error' ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-200 text-sm text-zinc-400">
          {alt || 'No image'}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="relative h-full w-full object-cover"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}

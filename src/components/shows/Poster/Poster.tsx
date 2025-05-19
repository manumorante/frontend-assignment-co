import { useState } from 'react'
import cx from 'clsx'

interface PosterProps {
  alt: string
  src?: string
  className?: string
  priority?: boolean
}

export default function Poster({ alt, src, className, priority = false }: PosterProps) {
  const [error, setError] = useState(false)
  const classes =
    'relative aspect-[17/25] w-full rounded-base overflow-hidden shadow-md transition-transform duration-300 ease-out'

  return (
    <div className={cx(classes, className)}>
      {!src || error ? (
        <NoImage alt={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

function NoImage({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 text-sm text-zinc-400">
      {alt}
    </div>
  )
}

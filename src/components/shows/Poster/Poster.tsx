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
  const classes = cx(
    'group relative aspect-[17/25] w-full rounded-base shadow-md transition-transform duration-300 ease-out md:group-hover:z-50 z-10',
  )

  return (
    <div className={cx(classes, className)}>
      {!src || error ? (
        <NoImage alt={alt} />
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            className="relative z-10 h-full w-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setError(true)}
          />
          <img
            src={src}
            role="presentation"
            aria-hidden="true"
            className="absolute top-0 z-0 h-full w-full scale-75 object-cover blur-2xl transition-transform duration-300 md:group-hover:scale-100"
            loading="eager"
          />
        </>
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

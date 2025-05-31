import { cn } from '@/lib/utils'
import { useState } from 'react'

interface PosterProps {
  alt?: string
  src?: string
  className?: string
  priority?: boolean
  isLoading?: boolean
}

export default function Poster({
  alt = '',
  src,
  className,
  priority = false,
  isLoading = false,
}: PosterProps) {
  const [error, setError] = useState(false)
  const classes = cn(
    'group relative aspect-[17/25] w-full rounded-base shadow-md transition-transform duration-300 ease-out md:group-hover:z-50 z-10',
  )

  if (isLoading) {
    return <Skeleton className={className} />
  }

  return (
    <div className={cn(classes, className)}>
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
    <div
      data-testid="no-image"
      className="absolute inset-0 flex items-center justify-center bg-zinc-200 text-sm text-zinc-400">
      {alt}
    </div>
  )
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div role="status" className={cn('rounded-base skeleton-pulse aspect-[17/25]', className)} />
  )
}

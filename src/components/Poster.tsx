import { useState } from 'react'

export default function Poster({ alt, src }: { alt: string; src: string }) {
  const [loading, setLoading] = useState(true)

  return (
    <div className="rounded-base relative aspect-[17/25] w-full overflow-hidden shadow-md">
      {loading && <SkeletonPoster />}
      <img
        src={src}
        alt={alt}
        className="relative h-full w-full object-cover"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </div>
  )
}

function SkeletonPoster() {
  return <div className="skeleton-pulse absolute inset-0 z-10" />
}

import { Loading } from '@/components'

export default function Poster({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md">
      <Loading />
      <img src={src} alt={alt} className="relative aspect-[17/25] w-full" />
    </div>
  )
}

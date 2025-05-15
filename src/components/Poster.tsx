export default function Poster({ alt, src }: { alt: string; src: string }) {
  return <img src={src} alt={alt} className="w-full rounded-lg shadow-md" />
}

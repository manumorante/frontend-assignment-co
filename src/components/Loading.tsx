export default function Loading() {
  return (
    <div
      role="status"
      className="absolute inset-0 z-0 flex items-center justify-center bg-zinc-200/30">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-500" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

import { XCircleIcon } from '@heroicons/react/24/outline'
export default function Warn({ message }: { message: string }) {
  return (
    <div className="rounded-base flex gap-3 border border-rose-600 bg-rose-50 p-4 text-rose-950/80">
      <XCircleIcon className="h-6 w-6" />

      <div className="space-y-1">
        <p className="font-bold">Error</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

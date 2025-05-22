export default function ErrorAlert({ message }: { message: string }) {
  return (
    <div className="Alerta flex h-full w-full flex-1 items-center justify-center">
      <div className="rounded-base border-secondary flex items-end gap-6 border bg-white px-6 py-5">
        <p className="border-secondary w-32 border-r pr-5 text-right text-xl leading-tight font-extralight">
          Oops, something went wrong
        </p>

        <div className="space-y-1 font-extralight text-zinc-400">
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

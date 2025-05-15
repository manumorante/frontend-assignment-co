export default function ErrorMessage({ message }: { message: string }) {
  return <div className="p-4 text-red-500">{message}</div>
}

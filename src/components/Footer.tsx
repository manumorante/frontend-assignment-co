export default function Footer() {
  return (
    <footer className="border border-zinc-200 bg-zinc-50 inset-ring-zinc-50">
      <div className="main-container">
        <div className="py-10 text-center text-sm text-zinc-600">
          <p>♥ {new Date().getFullYear()} Manu Morante</p>
          <p className="mt-1 text-xs">Correcto</p>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <footer className="border border-slate-200 bg-slate-50 inset-ring-slate-50">
      <div className="container mx-auto max-w-5xl">
        <div className="py-10 text-center text-sm text-slate-600">
          <p>♥ {new Date().getFullYear()} Manu Morante</p>
          <p className="mt-1 text-xs">Correcto</p>
        </div>
      </div>
    </footer>
  )
}

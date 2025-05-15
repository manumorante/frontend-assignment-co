import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-slate-950 text-slate-200 shadow-xs">
      <div className="container mx-auto max-w-5xl">
        <nav className="flex gap-6 py-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  )
}

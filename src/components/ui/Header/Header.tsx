import { cn } from '@/lib/utils'
import { NavLink } from 'react-router'

export default function Header() {
  const itemClass = (isActive: boolean) => {
    const base =
      'flex items-center gap-1.5 px-2 py-1  rounded-lg text-zinc-500 transition-colors md:hover:bg-zinc-100 duration-400'
    const active = 'bg-zinc-100 text-zinc-950'
    return isActive ? cn(base, active) : base
  }

  return (
    <header
      className={cn(
        'sticky top-6 z-30 mx-auto',
        'mb-6 max-w-2xl px-2 sm:px-4',
        'rounded-2xl border border-transparent',
        'bg-white shadow-lg',
      )}>
      <nav className="flex gap-4 py-1 sm:gap-8">
        <NavLink className={({ isActive }) => itemClass(isActive)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => itemClass(isActive)} to="/shows">
          TV Shows
        </NavLink>
        <NavLink className={({ isActive }) => itemClass(isActive)} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  )
}

import { HomeIcon, FilmIcon, HeartIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'

import { NavLink } from 'react-router'

export default function Header() {
  const styles = {
    item: 'flex items-center gap-1.5 text-zinc-500',
    active: 'text-zinc-950',
  }

  return (
    <header className="sticky top-0 z-10 bg-zinc-50 shadow-xs">
      <div className="container mx-auto max-w-5xl">
        <nav className="flex gap-8 py-5">
          <NavLink
            className={({ isActive }) => (isActive ? cx(styles.item, styles.active) : styles.item)}
            to="/">
            <HomeIcon className="h-5 w-5" />
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? cx(styles.item, styles.active) : styles.item)}
            to="/shows">
            <FilmIcon className="h-5 w-5" />
            Shows
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? cx(styles.item, styles.active) : styles.item)}
            to="/favorites">
            <HeartIcon className="h-5 w-5" />
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

import cx from 'clsx'
import { NavLink } from 'react-router'

export default function Header() {
  const styles = {
    header: cx(
      // Positioning & Layer
      'sticky top-4 z-30 mx-auto mb-4',

      // Sizing & Layout
      'max-w-2xl px-2 sm:px-4',

      // Visuals
      'rounded-2xl border border-transparent bg-white shadow-lg',

      // Effects
      'transition-[box-shadow,background-color] duration-300',
    ),
    item: cx(
      'flex items-center gap-1.5',
      'px-3 py-2 rounded-lg',
      'text-zinc-500',
      'transition-colors hover:bg-zinc-100 duration-400',
    ),
    active: 'bg-zinc-100 text-zinc-950',
  }

  return (
    <header className={styles.header}>
      <nav className="flex gap-4 py-1 sm:gap-6">
        <NavLink
          className={({ isActive }) => (isActive ? cx(styles.item, styles.active) : styles.item)}
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? cx(styles.item, styles.active) : styles.item)}
          to="/shows">
          TV Shows
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? cx(styles.item, styles.active) : styles.item)}
          to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  )
}

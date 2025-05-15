import { NavLink } from 'react-router'

export default function Navigation() {
  return (
    <div className="Navigation space-x-4 py-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shows">Shows</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  )
}

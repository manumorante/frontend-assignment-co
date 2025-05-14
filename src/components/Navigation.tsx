import { NavLink } from 'react-router'

export default function Navigation() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shows">Shows</NavLink>
      <NavLink to="/shows/id-example">Shows ID</NavLink>
    </div>
  )
}

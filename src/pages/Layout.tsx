import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="container mx-auto min-h-screen p-4 sm:p-8">
      <div className="Navigation space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/shows/id-example">Shows ID</NavLink>
      </div>

      <Outlet />
    </div>
  )
}

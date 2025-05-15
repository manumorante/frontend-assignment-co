import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <div className="container mx-auto p-4 sm:p-8">
        <div className="Navigation space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/shows/id-example">Shows ID</NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

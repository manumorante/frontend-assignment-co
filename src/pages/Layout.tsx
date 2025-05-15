import { Navigation } from '@/components'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="container mx-auto min-h-screen max-w-5xl px-4 sm:px-8">
      <Navigation />
      <Outlet />
    </div>
  )
}

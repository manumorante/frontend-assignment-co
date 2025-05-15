import { Header, Footer } from '@/components'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <Header />

      <main className="container mx-auto max-w-5xl flex-grow px-4 sm:px-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

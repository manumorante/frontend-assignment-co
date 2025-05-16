import { Header, Footer } from '@/components'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <Header />

      <main className="main-container flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

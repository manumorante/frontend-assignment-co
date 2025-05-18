import { Footer, Header } from '@/components/ui'
import { Outlet } from 'react-router'

export default function MainLayout() {
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

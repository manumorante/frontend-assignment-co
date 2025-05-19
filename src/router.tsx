import { Loading } from '@/components/ui'
import MainLayout from '@/layouts/MainLayout'
import { ComponentType, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const ShowListPage = lazy(() => import('@/pages/ShowListPage/ShowListPage'))
const ShowDetailsPage = lazy(() => import('@/pages/ShowDetailsPage/ShowDetailsPage'))
const ShowFavoritesPage = lazy(() => import('@/pages/ShowFavoritesPage/ShowFavoritesPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LazyRoute component={HomePage} />} />
          <Route path="shows" element={<LazyRoute component={ShowListPage} />} />
          <Route path="shows/:id" element={<LazyRoute component={ShowDetailsPage} />} />
          <Route path="favorites" element={<LazyRoute component={ShowFavoritesPage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const LazyRoute = ({ component: Component }: { component: ComponentType }) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

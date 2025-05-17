import { Layout, Loading } from '@/components/ui'
import { ComponentType, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ShowListPage = lazy(() => import('@/pages/ShowListPage'))
const ShowDetailsPage = lazy(() => import('@/pages/ShowDetailsPage'))
const ShowFavoritesPage = lazy(() => import('@/pages/ShowFavoritesPage'))

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<LazyRoute component={HomePage} />} />
            <Route path="shows" element={<LazyRoute component={ShowListPage} />} />
            <Route path="shows/:id" element={<LazyRoute component={ShowDetailsPage} />} />
            <Route path="favorites" element={<LazyRoute component={ShowFavoritesPage} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

const LazyRoute = ({ component: Component }: { component: ComponentType }) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

import { Loading } from '@/components'
import Layout from '@/pages/Layout'
import { lazy, Suspense } from 'react'
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
            <Route index element={<HomePage />} />
            <Route path="shows" element={<ShowListPage />} />
            <Route path="shows/:id" element={<ShowDetailsPage />} />
            <Route path="favorites" element={<ShowFavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

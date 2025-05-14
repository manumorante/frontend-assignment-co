import { Loading } from '@/components'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/pages/Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const MovieListPage = lazy(() => import('@/pages/MovieListPage'))
const MovieDetailsPage = lazy(() => import('@/pages/MovieDetailsPage'))

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shows" element={<MovieListPage />} />
            <Route path="shows/:id" element={<MovieDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

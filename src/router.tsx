import { Loading } from '@/components'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/pages/Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ShowListPage = lazy(() => import('@/pages/ShowListPage'))
const ShowDetailsPage = lazy(() => import('@/pages/ShowDetailsPage'))

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shows" element={<ShowListPage />} />
            <Route path="shows/:id" element={<ShowDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

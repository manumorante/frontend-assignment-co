import MainLayout from '@/layouts/MainLayout'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const ShowListPage = lazy(() => import('@/pages/ShowListPage/ShowListPage'))
const ShowDetailsPage = lazy(() => import('@/pages/ShowDetailsPage/ShowDetailsPage'))
const ShowFavoritesPage = lazy(() => import('@/pages/ShowFavoritesPage/ShowFavoritesPage'))

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shows',
        element: <ShowListPage />,
      },
      {
        path: 'shows/:id',
        element: <ShowDetailsPage />,
      },
      {
        path: 'favorites',
        element: <ShowFavoritesPage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

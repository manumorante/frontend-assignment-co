import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container mx-auto max-w-5xl">
      <AppRouter />
    </div>
  </StrictMode>,
)

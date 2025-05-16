import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function queryClientWrapper() {
  const queryClient = new QueryClient()
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

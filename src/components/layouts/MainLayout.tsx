import type { JSX } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import { TheMenuFooter } from '@/components/footer/TheMenuFooter.tsx'

export const MainLayout = (): JSX.Element => {
  return (
    <>
      <main className="p-4 pb-16">
        <Outlet />
      </main>
      <TheMenuFooter />
      <ScrollRestoration />
    </>
  )
}

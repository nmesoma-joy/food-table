import { NavBar } from '#components/header/NavBar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
      <React.Fragment>
        <NavBar />
        <Outlet />
      </React.Fragment>
    </QueryClientProvider>
  )
}

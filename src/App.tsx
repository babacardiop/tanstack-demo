import { routeTree } from './routeTree.gen';
import './App.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App

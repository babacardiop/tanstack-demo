import { routeTree } from "./routeTree.gen";
import "./App.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./hooks/auth";

const router = createRouter({
  routeTree,
  context: { authentification: undefined! },
  defaultNotFoundComponent: () => <div>Global Not Found !</div>,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authentification = useAuth();
  return (
    <RouterProvider router={router} context={{ authentification }} />
  );
}

export default App;

import { Link, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContext } from "../hooks/auth";

const activeProps = {
    style: {
        fontWeight: "bold",
    },
};

type RouterContext = {
authentification: AuthContext
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/" activeProps={activeProps}>Home</Link>
        </li>
        <li>
          <Link to="/profile" activeProps={activeProps}>
          {({isActive}) => <> Profile {isActive && "~"}</>}
          </Link>
        </li>
        <li>
          <Link to="/pokemon" activeProps={activeProps}>
          Pokemons
          </Link>
        </li>
        <li>
          <Link to="/search" activeProps={activeProps} search={{hasDiscount: false}}>
          Search
          </Link>
        </li>
        <li>
          <Link to="/login">
          Login
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
          Dashboard
          </Link>
        </li>
        <li>
          <Link to="/settings">
          Settings
          </Link>
        </li>
        <li>
          <Link to="/first-level">
          First Level
          </Link>
        </li>
        <li>
          <Link to="/layouts/visibleLayout">
          Layouts
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

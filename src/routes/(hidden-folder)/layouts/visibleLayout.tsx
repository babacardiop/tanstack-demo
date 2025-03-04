import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden-folder)/layouts/visibleLayout')({
  component: VisibleLayout,
  notFoundComponent: () => <div>Not found inside Visible Layout !</div>,
})

function VisibleLayout() {
  return <div>
    <p>This layout is visible in the URL</p>
    <Link to='/layouts/visibleLayout/foo'>Foo</Link>{" "}
    <Link to='/layouts/visibleLayout/bar'>Bar</Link>
    <hr />
    <Outlet />
  </div>
}

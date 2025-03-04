import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
  beforeLoad:  ({context}) => {
    const {isLogged} = context.authentification;
    if(!isLogged()) {
      throw redirect({to: '/login'});
    }
  }
})

function RouteComponent() {
  return <div>Hello "/profile"!</div>
}

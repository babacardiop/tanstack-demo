import { redirect, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad:  ({context}) => {
      const {isLogged} = context.authentification;
      if(!isLogged()) {
        throw redirect({to: '/login'});
      }
    }
})

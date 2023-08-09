import { Outlet, Navigate } from 'react-router-dom'

export const PublicRoutes = () => {
  const userLogged = localStorage.getItem('@UserLogged')

  return userLogged ? <Navigate to='/dashboard' /> : <Outlet />
}

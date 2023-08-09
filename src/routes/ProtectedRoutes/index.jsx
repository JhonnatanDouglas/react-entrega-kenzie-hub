import { Outlet, Navigate } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const userLogged = localStorage.getItem('@UserLogged')

  return userLogged ? <Outlet /> : <Navigate to='/' />
}

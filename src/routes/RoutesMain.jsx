import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'
import { RegisterPage } from '../Pages/RegisterPage'
import { DashboardPage } from '../Pages/DashboardPage'
import { ProtectedRoutes } from './ProtectedRoutes'
import { DashboardProvider } from '../providers/techProvider'
import { PublicRoutes } from './PublicRoutes'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route path='/dashboard' element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <DashboardProvider>
              <DashboardPage />
            </DashboardProvider>
          }
        />
      </Route>
    </Routes>
  )
}

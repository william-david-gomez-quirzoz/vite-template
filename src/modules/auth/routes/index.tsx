import { PathName } from 'core/enum'
import AuthLaout from 'core/layouts/auth'
import { Suspense, lazy, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

const AuthRouths = () => {
  const modules = useMemo(
    () => ({
      lazyLogin: lazy(() => import('modules/auth/pages/login')),
      lazyRestart: lazy(() => import('modules/auth/pages/restore')),
    }),
    []
  )
  return (
    <AuthLaout>
      <Routes>
        <Route
          path={PathName.Login}
          element={
            <Suspense fallback={'...loading'}>
              <modules.lazyLogin />
            </Suspense>
          }
        />

        <Route
          path={PathName.Restore}
          element={
            <Suspense fallback={'...loading'}>
              <modules.lazyRestart />
            </Suspense>
          }
        />
      </Routes>
    </AuthLaout>
  )
}
export default AuthRouths

import { PathName } from "core/enum"
import { Suspense, lazy, useMemo } from "react"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./privateRoute"
import { Box } from "@mui/material"

const RouteApp = () => {
    const modules = useMemo(
        () => ({
            lazyLogin: lazy(() => import('modules/auth/routes'))
        }),
        [],
      )
  return (
    <Routes>
      <Route
        path={PathName.LoginBase}
        element={
          <Suspense fallback={'...loading'}>
            <PrivateRoute
              validation={true}
              element={<modules.lazyLogin />}
            />
          </Suspense>
        }
      />
      <Route path="*" element={<Box>404</Box>} />
    </Routes>
  )
}

export { RouteApp }

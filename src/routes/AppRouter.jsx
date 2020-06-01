import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './../scenes/Home/Home'
import { Auth } from './../scenes/auth/Auth'
import { routes } from './routes'
import { WithAuthRedirect } from './../utils/auth/WithAuthRedirect'
import { Viewer } from './../scenes/Viewer/Viewer'
import { PrivateRoute } from './../utils/auth/PrivateRoute'
import { Products } from '../scenes/Products/Products'
import { Searh } from '../scenes/Search/Search'
import { UserProducts } from '../scenes/UserProducts/UserProducts'
import { Chats } from '../scenes/Chat/Chats'

export const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route
          path={routes.auth.path}
          render={() => (
            <WithAuthRedirect>
              <Auth />
            </WithAuthRedirect>
          )}
        />
        <Route exact path={routes.home.path} component={Home} />
        <Route
          path={routes.viewer.path}
          render={() => (
            <PrivateRoute>
              <Viewer />
            </PrivateRoute>
          )}
        />
        <Route path={routes.products.path} component={Products} />
        <Route exact path={routes.search.path} component={Searh} />
        <Route
          exact
          path={routes.userProducts.path}
          component={UserProducts}
        />
        <Route
          path={routes.chats.path}
          render={() => (
            <PrivateRoute>
              <Chats />
            </PrivateRoute>
          )}
        />
      </Switch>
    </>
  )
}

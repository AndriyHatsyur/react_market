import React from 'react'
import s from './products.module.css'
import { SearchHeader } from '../../components/Header/SearchHeader'
import { Footer } from '../../components/Footer/Footer'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { ProductsSaved } from './ProductsSaved/ProductsSaved'
import { PrivateRoute } from '../../utils/auth/PrivateRoute'
import { ProductDetail } from './ProductDetail/ProductDetail'

export const Products = () => {
  return (
    <div className={s.container}>
      <SearchHeader />
      <main>
        <Switch>
          <Route
            path={routes.products.saved.path}
            render={() => (
              <PrivateRoute>
                <ProductsSaved />
              </PrivateRoute>
            )}
          />
          <Route
            path={routes.products.detail.path}
            children={<ProductDetail />}
            exact
          />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

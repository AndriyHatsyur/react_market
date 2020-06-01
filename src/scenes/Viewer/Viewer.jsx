import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProfileHeader } from './../../components/Header/ProfileHeader/ProfileHeader'
import { routes } from './../../routes/routes'
import { EditProfile } from './EditpProfile/EditProfile'
import { SellProduct } from './SellProduct/SellProduct'

export const Viewer = () => {
  return (
    <div>
      <ProfileHeader />
      <main>
        <Switch>
          <Route
            path={routes.viewer.editProfile.path}
            component={EditProfile}
          />
          <Route
            path={routes.viewer.sell.path}
            component={SellProduct}
          />
        </Switch>
      </main>
    </div>
  )
}

import React from 'react'
import { Redirect } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { connect } from 'react-redux'
import { isAuth } from './../../modules/viewer/viewerSelectors'

const RedirectComponent = ({ isAuth, children }) =>
  !isAuth ? children : <Redirect to={routes.home.path} />

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
})

export const WithAuthRedirect = connect(mapStateToProps)(
  RedirectComponent,
)

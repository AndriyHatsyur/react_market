import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppRouter } from './routes/AppRouter'
import { init } from './modules/app/appOperations'
import { isAppLoading } from './modules/app/appSelectors'

function App({ init, isLoading }) {
  useEffect(() => {
    init()
  }, [init])

  if (isLoading) return <div>Loading...</div>

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  isLoading: isAppLoading(state),
})

export default connect(mapStateToProps, { init })(App)

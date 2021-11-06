import React, {Suspense, lazy, useState, useEffect} from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'
import Progress from './components/Progress'

const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/dashboard'>
                {isSignedIn ? <DashboardLazy /> : <Redirect to='/' />}
              </Route>
              <Route exec path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}

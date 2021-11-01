import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Progress from './components/Progress'

const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth' component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App'

// Mount function to start the app
const mount = (el, {onNavigate, defaultHistory}) => {
    const history = defaultHistory ?? createMemoryHistory()
    if (onNavigate) history.listen(onNavigate)

    ReactDOM.render(
        <App history={history} />,
        el)

    return {
        onContainerNavigate: ({pathname: newPathname}) => {
            const {pathname} = history.location
            
            if (pathname !== newPathname) {
                history.push(newPathname)
            }
        }
    }
}

// If we are in a development mode and in isolation, call mount function immediately
if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_marketing-dev-root')

    if (root) {
        mount(root, {defaultHistory: createBrowserHistory()})
    }
}

// We are running through the container, so we need to export the mount function
export { mount }

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount function to start the app
const mount = el => {
    ReactDOM.render(
        <App />,
        el)
}

// If we are in a development mode and in isolation, call mount function immediately
if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_marketing-dev-root')

    if (root) {
        mount(root)
    }
}

// We are running through the container, so we need to export the mount function
export { mount }

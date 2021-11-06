import {createApp} from 'vue'
import Dashboard from './components/Dashboard'

// Mount function to start the app
const mount = (el) => {
    const app = createApp(Dashboard)
    app.mount(el)
}

// If we are in a development mode and in isolation, call mount function immediately
if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_dashboard-dev-root')

    if (root) {
        mount(root)
    }
}

// We are running through the container, so we need to export the mount function
export { mount }

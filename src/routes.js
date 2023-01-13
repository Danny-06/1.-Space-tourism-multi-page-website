import _ from './libs/functional-dom/index.js'
import Home from './pages/home/home.js'

/**@type {import('./libs/functional-dom/components/dom-navigate/index.js').NavigateRoute[]} */
export const routes = [
  {
    path: '*',
    component: function NotFound() {
      const style = {width: '100%', height: '100%', backgroundColor: '#9005', display: 'grid', placeItems: 'center'}
      return _.div({style}, 'NOT FOUND')
    }
  },
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    component: Home
  },
]

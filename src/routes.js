import _ from './libs/functional-dom/index.js'


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
    lazyComponent: () => import('./pages/home/home.js')
  },
  {
    path: '/destination',
    lazyComponent: () => import('./pages/destination/destination.js')
  },
  {
    path: '/crew',
    lazyComponent: () => import('./pages/crew/crew.js')
  },
  {
    path: '/technology',
    lazyComponent: () => import('./pages/technology/technology.js')
  },
]

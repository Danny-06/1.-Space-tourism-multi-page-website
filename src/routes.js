import _ from './libs/functional-dom/index.js'
// import CrewPage from './pages/crew/crew.js'
// import DestinationPage from './pages/destination/destination.js'
// import HomePage from './pages/home/home.js'
// import TechnologyPage from './pages/technology/technology.js'

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
    // component: HomePage,
    lazyComponent: () => import('./pages/home/home.js')
  },
  {
    path: '/destination',
    // component: DestinationPage,
    lazyComponent: () => import('./pages/destination/destination.js')
  },
  {
    path: '/crew',
    // component: CrewPage,
    lazyComponent: () => import('./pages/crew/crew.js')
  },
  {
    path: '/technology',
    // component: TechnologyPage,
    lazyComponent: () => import('./pages/technology/technology.js')
  },
]

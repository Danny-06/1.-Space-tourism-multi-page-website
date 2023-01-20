import _ from "../../index.js";
import navigation from "./navigation.js";
import { sortWildCardRouteToEnd } from "./utils.js";

/**
 * @typedef NavigateRouteComponent
 * @property {string} path
 * @property {() => import("../../libs/core.js").CoreNode} [component]
 * @property {never} [lazyComponent]
 * @property {never} [redirect]
 */

/**
 * @typedef NavigateRouteLazyComponent
 * @property {string} path
 * @property {never} [component]
 * @property {() => Promise<any>} lazyComponent
 * @property {never} [redirect]
 */

/**
 * @typedef NavigateRouteRedirect
 * @property {string} path
 * @property {never} [component]
 * @property {string} redirect
 */

/**
 * @typedef {NavigateRouteComponent | NavigateRouteRedirect | NavigateRouteLazyComponent} NavigateRoute
 */

/**
 * @typedef DOMNavigateObject
 * @property {HTMLElement} component
 * @property {(pathname: string) => void} update Update component based on the provided pathname
 */

/**
 * 
 * @param {NavigateRoute[]} navigateRoutes 
 * @returns {DOMNavigateObject}
 */
export default function DOMNavigate(navigateRoutes) {
  const component = _['dom-navigate']()

  const sortedRoutes = sortWildCardRouteToEnd(navigateRoutes)  

  const lazyComponentMap = new Map()

  return {
    component,

    async update(pathname) {
      let renderComponentFunc = null

      for (const route of sortedRoutes) {
        if (route.path === pathname || route.path === '*') {
          if ('redirect' in route) {
            setTimeout(() => {
              navigation.replace(route.redirect)
            })

            return
          }

          if (typeof route.lazyComponent === 'function') {
            if (lazyComponentMap.has(route.path)) {
              renderComponentFunc = lazyComponentMap.get(route.path)
            } else {
              const module = await route.lazyComponent()
              renderComponentFunc = module.default
              lazyComponentMap.set(route.path, renderComponentFunc)
            }
          } else {
            renderComponentFunc = route.component
          }

          break
        }
      }

      component.replaceChildren()

      if (typeof renderComponentFunc !== 'function') {
        return
      }

      const renderComponent = renderComponentFunc()

      // @ts-ignore
      component.append(renderComponent)
    }
  }
}

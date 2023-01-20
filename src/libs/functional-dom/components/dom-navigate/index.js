import _ from "../../index.js";
import navigation from "./navigation.js";
import { sortWildCardRouteToEnd } from "./utils.js";

/**
 * @template T
 * @typedef Module
 * @property {T} default
 */

/**
 * @typedef {() => import("../../libs/core.js").CoreNode} Component
 */

/**
 * @typedef {() => Promise<Module<Component>>} LazyComponent
 */

/**
 * @typedef NavigateRouteComponent
 * @property {string} path
 * @property {Component} [component]
 * @property {never} [lazyComponent]
 * @property {never} [redirect]
 */

/**
 * @typedef NavigateRouteLazyComponent
 * @property {string} path
 * @property {never} [component]
 * @property {LazyComponent} lazyComponent
 * @property {never} [redirect]
 */

/**
 * @typedef NavigateRouteRedirect
 * @property {string} path
 * @property {never} [component]
 * @property {never} [lazyComponent]
 * @property {string} redirect
 */

/**
 * @typedef {NavigateRouteComponent | NavigateRouteRedirect | NavigateRouteLazyComponent} NavigateRoute
 */

/**
 * @typedef DOMNavigateOptions
 * @property {Component} [loadingComponent]
 * @property {Component} [errorComponent]
 */

/**
 * @typedef DOMNavigateObject
 * @property {HTMLElement} component
 * @property {(pathname: string) => void} update Update component based on the provided pathname
 */

/**
 *
 * @param {NavigateRoute[]} navigateRoutes
 * @param {DOMNavigateOptions} [options]
 * @returns {DOMNavigateObject}
 */
export default function DOMNavigate(navigateRoutes, options = {}) {
  const component = _['dom-navigate']()

  const sortedRoutes = sortWildCardRouteToEnd(navigateRoutes)

  /**
   * @type {Map<string, Component>}
   */
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
              // Handle first loading of LazyComponent
              let isLoaded = false

              if (typeof options.loadingComponent === 'function') {

                setTimeout(() => {
                  if (isLoaded) {
                    return
                  }

                  component.replaceChildren()
  
                  // @ts-ignore
                  component.append(options.loadingComponent())
                }, 30)
              }

              const module = await route.lazyComponent().catch(reason => {
                console.error(reason)
                return null
              })

              isLoaded = true

              // Handle load error
              if (module == null) {
                if (typeof options.errorComponent === 'function') {
                  component.replaceChildren()

                  // @ts-ignore
                  component.append(options.errorComponent())
                }

                return
              }

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

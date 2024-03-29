import _ from "../../index.js"
import navigation from "./navigation.js"

const linkNavigateSymbol = Symbol('link-navigate')
const linkStateSymbol = Symbol('state')
const linkMethodSymbol = Symbol('method')
const linkDefaultBehaviorSymbol = Symbol('default-behavior')

/**
 * @typedef {import("../../libs/core.js").FunctionalDOMProperties} FunctionalDOMProperties
 */

/**
 * @typedef {import("../../libs/core.js").Children} Children
 */

/**
 * @typedef DefaultLinkPropertiesDef
 * @property {string} [href] Value for the `href` attribute of the `HTMLAnchorElement`
 * @property {string} [target] Value for the `target` attribute of the `HTMLAnchorElement`
 * @property {string} [download] Value for the `download` attribute of the `HTMLAnchorElement`
 */

/**
 * @typedef LinkPropertiesDef
 * @property {boolean} [defaultBehavior=false] Use normal behavior of anchors to go to a url (no navigation)
 * @property {History['state']} [state] The state value to store in `History.state`
 * @property {'push' | 'replace'} [method] The navigation method to use. If unspecified it will be `push` for normal urls but for urls that contains a hash (`#`) `replace` will be used.
 */

/**
 * @typedef {FunctionalDOMProperties & DefaultLinkPropertiesDef & LinkPropertiesDef} LinkProperties
 */

/**
 * Anchor tag to do navigation using the history API
 * @param {LinkProperties} [options] 
 * @param  {...Children} children 
 * @returns {HTMLAnchorElement}
 */
export function Link(options, ...children) {
  if (new.target) {
    throw new Error(`Cannot call function with the new operator`)
  }

  const {href, target, download, state, method, defaultBehavior} = options ?? {}

  const anchor = _.a(options, ...children)

  anchor[linkNavigateSymbol] = undefined

  anchor[linkStateSymbol] = state

  anchor[linkDefaultBehaviorSymbol] = Boolean(defaultBehavior)

  if (typeof target === 'string') {
    anchor.target = target
  }

  if (typeof href === 'string') {
    anchor.href = href
  }

  if (typeof download === 'string') {
    anchor.download = download
  }

  if (typeof method === 'string') {
    anchor.dataset.method = method
    anchor[linkMethodSymbol] = method
  }

  // Add data attribute to indicate the `href` matches the current pathname
  navigation.addEventListener('custom-navigate', event => {
    const pathname = new URL(event.detail.path, location.href).toString()
    const pathnameMatches = anchor.href === pathname

    anchor.dataset.pathnameMatches = pathnameMatches.toString()
  })

  // Propagate accessibility keyboard events for it to be used in inner components

  anchor.addEventListener('keydown', event => {
    if (event.code !== 'Enter') {
      return
    }

    setTimeout(() => {
      if (anchor.firstElementChild) {
        anchor.firstElementChild.dispatchEvent(new CustomEvent('pointerdown', {bubbles: false}))
      }
    })
  })

  anchor.addEventListener('keyup', event => {
    if (event.code !== 'Enter') {
      return
    }

    setTimeout(() => {
      if (anchor.firstElementChild) {
        anchor.firstElementChild.dispatchEvent(new CustomEvent('pointerup', {bubbles: false}))
      }
    })
  })

  return anchor
}

/**
 * @typedef {DefaultLinkPropertiesDef & FunctionalDOMProperties} DefaultLinkProperties
 */

/**
 * Default anchor tag
 * @param {DefaultLinkProperties} [options] 
 * @param  {...import("../../libs/core.js").Children} children 
 * @returns {HTMLAnchorElement}
 */
Link.default = function(options, ...children) {
  return Link({...options, defaultBehavior: true}, ...children)
}


window.addEventListener('click', event => {
  /**@type {HTMLAnchorElement}*/
  // @ts-ignore
  const anchor = event.target.closest('a')

  // Check Symbol property to conditionally apply the logic
  if (anchor == null || !anchor.hasOwnProperty(linkNavigateSymbol)) {
    return
  }

  // Use the default behavior of the anchor
  if (anchor[linkDefaultBehaviorSymbol]) {
    return
  }

  // Prevent default behavior of `<a>` tags on click event
  event.preventDefault()

  const url = anchor.href

  const state = anchor[linkStateSymbol]

  switch (anchor[linkMethodSymbol]) {
    case 'replace':
      navigation.replace(url, state)
    break

    case 'push':
      navigation.push(url, state)
    break

    default:
      // If the url contains a hash then replace the current history entry else add a new entry 
      if (url.includes('#')) {
        navigation.replace(url, state)
      } else {
        navigation.push(url, state)
      }
  }
})

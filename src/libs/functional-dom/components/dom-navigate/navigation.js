/**
 * @typedef {{
 *  'custom-navigate': CustomEvent<CustomNavigateDetail>,
 *  'custom-before-navigate': CustomEvent<CustomBeforeNavigateDetail>,
 *  'custom-hash-change': CustomEvent<CustomHashChangeDetail>
 * }} NavigateEventsMap
 */

/**
 * @typedef {keyof NavigateEventsMap} NavigateEvents
 */

/**
 * @typedef CustomNavigateDetail
 * @property {string} path This is the same as using `window.location.pathname`
 */

/**
 * @typedef {void} CustomBeforeNavigateDetail
 */

/**
 * @typedef CustomHashChangeDetail
 * @property {string} hash This is the same as using `window.location.hash`
 */

let isUnsavedChangesSetted = false

/**
 * @template {NavigateEvents} T
 * @typedef {(event: NavigateEventsMap[T]) => void} CallbackListener
 */

const navigation = {

  get state() {
    return history.state
  },

  /**
   * 
   * @param {string} url 
   * @param {History['state']} [state=null] 
   */
  replace(url, state = null) {
    if (dispatchCustomBeforeNavigate()) {
      return
    }

    history.replaceState(state, '', url)

    dispatchCustomNavigate()
  },

  /**
   * 
   * @param {string} url 
   * @param {History['state']} [state=null] 
   */
  push(url, state = null) {
    if (dispatchCustomBeforeNavigate()) {
      return
    }

    history.pushState(state, '', url)

    dispatchCustomNavigate()
  },

  forward() {
    if (dispatchCustomBeforeNavigate()) {
      return
    }

    history.forward()
  },

  back() {
    if (dispatchCustomBeforeNavigate()) {
      return
    }

    history.back()
  },

  /**
   * 
   * @param {string} value 
   */
  hash(value) {
    location.hash = value
  },

  /**
   * @template {NavigateEvents} T
   * @param {T} eventType 
   * @param {CallbackListener<T>} callbackListener 
   * @returns {() => void} Function to clean up the listener
   */
  addEventListener(eventType, callbackListener) {
    window.addEventListener(eventType, callbackListener)

    return () => {
      window.removeEventListener(eventType, callbackListener)
    }
  },

  /**
   * @template {NavigateEvents} T
   * @param {T} eventType 
   * @param {CallbackListener<T>} callbackListener 
   */
  removeEventListener(eventType, callbackListener) {
    window.removeEventListener(eventType, callbackListener)
  },

  /**
   * 
   * @param {boolean} value 
   * @returns {void}
   */
  setUnsavedChanges(value) {
    if (value) {
      isUnsavedChangesSetted = true
      window.addEventListener('beforeunload', beforeUnloadHandler)
      navigation.addEventListener('custom-before-navigate', beforeNavigateHandler)
    } else {
      isUnsavedChangesSetted = false
      window.removeEventListener('beforeunload', beforeUnloadHandler)
      navigation.removeEventListener('custom-before-navigate', beforeNavigateHandler)
    }
  },

  /**
   * 
   * @returns {boolean}
   */
  hasUnsavedChanges() {
    return isUnsavedChangesSetted
  }

}

const beforeUnloadHandler = event => {
  event.preventDefault()
  event.returnValue = 'There maybe be unsaved changes. Do you want to navigate the page?'

  return true
}

const beforeNavigateHandler = event => {
  // Handle unsaved changes when navigating
  if (navigation.hasUnsavedChanges() && askForConfirmationBeforeNavigation()) {
    return
  }

  event.preventDefault()
}


const askForConfirmationBeforeNavigation = () => {
  const message = 'There maybe be unsaved changes. Do you want to navigate the page?'

  return confirm(message)
}

export default navigation


function dispatchCustomNavigate() {
  const init = {detail: {path: location.pathname}}

  const customNavigate = new CustomEvent('custom-navigate', init)
  window.dispatchEvent(customNavigate)
}

/**
 * 
 * @returns {boolean} Returns true if event default was prevented false otherwise
 */
function dispatchCustomBeforeNavigate() {
  const customBeforeNavigate = new CustomEvent('custom-before-navigate', {cancelable: true})
  window.dispatchEvent(customBeforeNavigate)

  return customBeforeNavigate.defaultPrevented
}

function dispatchCustomHashChange() {
  const init = {detail: {hash: location.hash}}

  const customHashChange = new CustomEvent('custom-hash-change', init)
  window.dispatchEvent(customHashChange)
}


// Fire `custom-navigate` event on `DOMContentLoaded`
window.addEventListener('DOMContentLoaded', event => {
  dispatchCustomNavigate()
  dispatchCustomHashChange()
}, {once: true})


window.addEventListener('popstate', event => {
  dispatchCustomNavigate()
})

window.addEventListener('hashchange', event => {
  dispatchCustomHashChange()
})

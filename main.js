import { getAllElementsMapWithDataJSAttribute } from './utils-module.js'


const {
  navList,
  openHamburguerMenuBtn,
  closeHamburguerMenuBtn
} = getAllElementsMapWithDataJSAttribute()


/*
  Handle hambuguer menu state
*/

openHamburguerMenuBtn.addEventListener('click', event => {
  navList.classList.add('-show-mobile')

  const abortListeners = new AbortController()
  const signal = abortListeners.signal

  // Avoid triggering global listener below
  event.stopPropagation()


  /* Close hamburgur menu if user clicks anywhere except on the navlist itself */
  window.addEventListener('click', event => {
    if (event.composedPath().includes(navList)) return

    navList.classList.remove('-show-mobile')

    abortListeners.abort()
  }, {signal})

  closeHamburguerMenuBtn.addEventListener('click', event => {
    event.stopPropagation()

    navList.classList.remove('-show-mobile')

    abortListeners.abort()
  }, {signal})
})

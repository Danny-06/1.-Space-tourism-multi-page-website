import { Link } from "../../libs/functional-dom/components/dom-navigate/Link.js";
import _, {buildElement as $} from "../../libs/functional-dom/index.js";
import stylesheet from './navbar.css';

document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet]


const links = [
  {
    href: '/',
    index: '00',
    name: 'HOME'
  },
  {
    href: '/destination',
    index: '01',
    name: 'DESTINATION'
  },
  {
    href: '/crew',
    index: '02',
    name: 'CREW'
  },
  {
    href: '/technology',
    index: '03',
    name: 'TECHNOLOGY'
  },
]

export default function Navbar() {
  const navbar = _.nav()

  const openHambugerBtn = _.button()
  const closeHambugerBtn = _.button()

  const list = _.div()

  function showNavbar() {
    list.style.transitionDuration = '0.2s'
    list.classList.add('-show-mobile')

    list.addEventListener('transitionend', event => {
      list.style.transitionDuration = ''

      closeHambugerBtn.focus()
    }, {once: true})
  }

  function hideNavbar() {
    list.style.transitionDuration = '0.2s'
    list.classList.remove('-show-mobile')

    list.addEventListener('transitionend', event => {
      list.style.transitionDuration = ''

      openHambugerBtn.focus()
    }, {once: true})
  }

  openHambugerBtn.addEventListener('click', event => {
    showNavbar()
  })

  closeHambugerBtn.addEventListener('click', event => {
    hideNavbar()
  })

  // Hide navbar when clicking outside
  window.addEventListener('click', event => {
    if (!list.classList.contains('-show-mobile') || event.composedPath().includes(navbar)) {
      return
    }

    list.style.transitionDuration = '0.2s'
    list.classList.remove('-show-mobile')

    list.addEventListener('transitionend', event => {
      list.style.transitionDuration = ''

      openHambugerBtn.focus()
    })
  })

  return $(navbar, {class: 'navbar-block'},
    Link({class: 'logo', href: '/'},
      _.img({attributes: {src: '/assets/images/shared/logo.svg', alt: 'Logo'}})
    ),
    $(openHambugerBtn, {class: 'btn-hamburguer-menu'}),
    _.div({class: 'linedecorator'}),
    $(list, {class: 'list', attributes: {role: 'list'}},
      $(closeHambugerBtn, {class: 'iconclose'}),

      links.map(link =>
        _.div({class: 'item', attributes: {role: 'listitem'}},
          Link({class: 'link', href: link.href,
            apply: anchor => anchor.addEventListener('click', hideNavbar)
          },
            _.span({class: 'index'}, link.index),
            _.span({class: 'name'}, link.name),
          )
        )
      ),
    ),
  )
}

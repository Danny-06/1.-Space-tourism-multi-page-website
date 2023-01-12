import { Link } from "../../libs/functional-dom/components/dom-navigate/Link.js";
import _, {buildElement as $} from "../../libs/functional-dom/index.js";


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
  const openHambugerBtn = _.button()
  const closeHambugerBtn = _.button()

  const list = _.div()

  openHambugerBtn.addEventListener('click', event => {
    list.classList.add('-show-mobile')
  })

  closeHambugerBtn.addEventListener('click', event => {
    list.classList.remove('-show-mobile')
  })

  return _.nav({class: 'navbar-block'},
    Link({class: 'logo', href: '/'},
      _.img({attributes: {src: '/assets/images/shared/logo.svg', alt: 'Logo'}})
    ),
    _.div({class: 'linedecorator'}),
    $(list, {class: 'list', attributes: {role: 'list'}},
      $(closeHambugerBtn, {class: 'iconclose'}),

      links.map(link =>
        _.div({class: 'item', attributes: {role: 'listitem'}},
          Link({class: 'link', href: link.href},
            _.span({class: 'index'}, link.index),
            _.span({class: 'name'}, link.name),
          )
        )
      ),
    ),
    $(openHambugerBtn, {class: 'btn-hamburguer-menu'}),
  )
}

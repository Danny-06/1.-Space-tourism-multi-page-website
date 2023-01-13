import mainStyleSheet from './styles/index.css'
import _, {buildElement as $, buildShadowHostElement as $$} from './libs/functional-dom/index.js'
import DOMNavigate from './libs/functional-dom/components/dom-navigate/index.js'
import navigation from './libs/functional-dom/components/dom-navigate/navigation.js'
import { routes } from './routes.js'
import Navbar from './components/navbar/navbar.js'

document.adoptedStyleSheets = [mainStyleSheet]

const Navigate = DOMNavigate(routes)

navigation.addEventListener('custom-navigate', event => {
  document.documentElement.dataset.pathname = event.detail.path

  Navigate.update(event.detail.path)
})

function App() {
  return _.div({dataset: {id: 'app'}},
    _.div({dataset: {id: 'app-content'}},
      Navbar(),
      $(Navigate.component, {class: 'navigate-component'})
    )
  )
}


const render = _(
  App(),
)

document.body.replaceChildren()

document.body.append(render)

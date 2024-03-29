import TitlePage from '../../components/title-page/title-page.js';
import _, { buildElement as $ } from '../../libs/functional-dom/index.js';
import data from '../data.json'
import stylesheet from './crew.css'

document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet]

const {crew} = data

export default function CrewPage() {
  let activeCrew = crew[0]

  const role = _.h2()
  const name = _.h2()
  const bio = _.p()
  const crewImage = _.img()

  update()

  function update() {
    role.innerHTML = activeCrew.role
    name.innerHTML = activeCrew.name
    bio.innerHTML = activeCrew.bio
    crewImage.src = activeCrew.images.png
  }

  const options = crew.map(person => {
    const option = _.button()

    if (activeCrew.name === person.name) {
      option.classList.add('-active')
    }

    option.addEventListener('click', event => {
      if (activeCrew.name === person.name) {
        return
      }

      options.forEach(option => option.classList.remove('-active'))
      option.classList.add('-active')

      activeCrew = person

      update()
    })

    return option
  })

  return _.main({class: 'crew-block'},
    _.div({class: 'infosection'},
      TitlePage('02', 'MEET YOUR CREW'),
      _.div({class: 'infodots'},
        _.div({class: 'info'},
          $(role, {class: 'role'}),
          $(name, {class: 'name'}),
          $(bio, {class: 'bio'}),
        ),
        _.div({class: 'dots'}, 
          (options.forEach(option => option.classList.add('options')), options)
        ),
      ),
    ),
    _.div({class: 'imagesection'},
      TitlePage('02', 'MEET YOUR CREW'),
      $(crewImage, {class: 'image'}),
      _.div({class: 'line'}),
    ),
  )
}

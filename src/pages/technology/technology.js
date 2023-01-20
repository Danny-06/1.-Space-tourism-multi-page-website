import TitlePage from '../../components/title-page/title-page.js';
import _, { buildElement as $ } from '../../libs/functional-dom/index.js';
import data from '../data.json'
import stylesheet from './technology.css'

document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet]

const {technology} = data


export default function TechnologyPage() {
  let activeOption = technology[0]

  const title = _.h1()
  const description = _.p()

  const {
    picture: responsivePicture,
    image,
    sources: [source]
  } = ResponsiveImageSource(['(max-width: 53.125em)'])


  update()

  function update() {
    title.textContent = activeOption.name
    description.textContent = activeOption.description

    image.src = activeOption.images.portrait
    source.srcset = activeOption.images.landscape
  }

  const options = technology.map((data, index) => {
    const button = _.button(null, index + 1)

    if (activeOption.name === data.name) {
      button.classList.add('-active')
    }

    button.addEventListener('click', event => {
      if (activeOption.name === data.name) {
        return
      }

      options.forEach(btn => btn.classList.remove('-active'))
      button.classList.add('-active')

      activeOption = data

      update()
    })

    return button
  })

  return _.main({class: 'technology-block'},
    TitlePage('03', 'SPACE LAUNCH 101'),
    _.div({class: 'infosection'},
      TitlePage('03', 'SPACE LAUNCH 101'),
      _.div({class: 'selectinfo'},
        _.div({class: 'select'},
          (options.forEach(btn => btn.classList.add('option')), options)
        ),
        _.div({class: 'info'},
          _.span({class: 'pretitle'}, 'THE TERMINOLOGY ...'),
          $(title, {class: 'title'}),
          $(description, {class: 'description'}),
        ),
      ),
    ),
    _.div({class: 'imagesection'},
      $(responsivePicture, {class: 'image'})
    ),
  )
}


/**
 * 
 * @param {string[]} mediaSources 
 * @returns {{
 *  picture: HTMLPictureElement,
 *  image: HTMLImageElement,
 *  sources: HTMLSourceElement[]
 * }}
 */
function ResponsiveImageSource(mediaSources) {
  const picture = _.picture()
  const image = _.img()

  const sources = mediaSources.map(media => {
    const source = _.source()

    source.media = media

    return source
  })

  $(picture, null,
    sources,
    image,
  )

  return {
    picture,
    image,
    sources
  }
}

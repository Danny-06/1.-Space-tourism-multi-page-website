import _, { buildElement as $ } from "../../libs/functional-dom/index.js";
import data from '../data.json'

const {destinations} = data

/**@type {{[key: string]: typeof destinations[0]}}*/
const destinationsObject = Object.assign({}, ...destinations.map(destination => ({[destination.name]: {...destination}})))

export default function DestinationPage() {
  let activePlanet = destinationsObject[destinations[0].name]

  const planetImg = _.img()

  const title = _.h2()
  const description = _.p()

  const avgDistanceValue = _.span()
  const timeTravelValue = _.span()

  update()

  function update() {
    planetImg.src = activePlanet.images.png

    title.innerHTML = activePlanet.name
    description.innerHTML = activePlanet.description

    avgDistanceValue.innerHTML = activePlanet.distance
    timeTravelValue.innerHTML = activePlanet.travel
  }

  const buttons = destinations.map(destination => {
    const button = _.button({}, destination.name)

    if (activePlanet.name === destination.name) {
      button.classList.add('-active')
    }

    button.addEventListener('click', event => {
      if (activePlanet.name === destination.name) {
        return
      }

      buttons.forEach(btn => btn.classList.remove('-active'))
      button.classList.add('-active')

      activePlanet = destinationsObject[destination.name]

      update()
    })

    return button
  })

  return _.main({class: 'destination-block'},
    _.div({class: 'imagesection'},
      _.div({class: 'title'},
        _.div({class: 'index'}, '01'),
        _.div({class: 'name'}, 'PICK YOUR DESTINATION'),
      ),
      _.div({class: 'image _absolute-media-wrapper_'},
        $(planetImg)
      ),
    ),
    _.div({class: 'infosection'},
      _.div({class: 'buttons'},
        (buttons.forEach(btn => btn.classList.add('option')), buttons)
      ),
      _.div({class: 'info'},
        $(title, {class: 'title'}),
        $(description, {class: 'description'}),

        _.div({class: 'lineseparator'}),

        _.div({class: 'datainfo'},
          _.div({class: 'avgdistance'}, 
            _.span({class: 'title'}, 'AVG. DISTANCE'),
            $(avgDistanceValue, {class: 'value'}),
          ),
          _.div({class: 'traveltime'},
            _.span({class: 'title'}, 'EST. TRAVEL TIME'),
            $(timeTravelValue, {class: 'value'}),
          ),
        ),
      ),
    ),
  )
}

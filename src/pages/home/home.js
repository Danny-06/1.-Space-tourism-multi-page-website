import _ from "../../libs/functional-dom/index.js";

export default function HomePage() {
  return _.main({class: 'home-block'},
    _.div({class: 'content'},
      _.h1({class: 'title'},
        'SO, YOU WANT TO TRAVEL TO',
        _.div({class: 'emphasis'}, 'SPACE'),
      ),
      _.p({class: 'description'},
        `
        Let’s face it;
        if you want to go to space,
        you might as well genuinely go to outer space and
        not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you
        a truly out of this world experience!
        `
      ),
    ),
    _.div({class: 'explore'},
      _.button({class: 'btn-explore'}, 'EXPLORE')
    ),
  )
}

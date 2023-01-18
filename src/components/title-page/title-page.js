import _ from "../../libs/functional-dom/index.js";

export default function TitlePage(index, name) {
  return _.div({class: 'title-page'},
    _.div({class: 'index'}, index),
    _.div({class: 'name'}, name),
  )
}

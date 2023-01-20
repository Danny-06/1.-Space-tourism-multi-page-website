import _ from '../../libs/functional-dom/index.js';
import stylesheet from './title-page.css';

document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet]

/**
 * 
 * @param {string} index 
 * @param {string} name 
 * @returns 
 */
export default function TitlePage(index, name) {
  return _.div({class: 'title-page'},
    _.div({class: 'index'}, index),
    _.div({class: 'name'}, name),
  )
}

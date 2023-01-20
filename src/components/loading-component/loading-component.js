import _ from '../../libs/functional-dom/index.js';

export default function LoadingComponent() {

  const style = _.style(null, // css
    `
    :host {
      display: grid !important;
      place-items: center;

      background-color: #0009;
    }

    .effect {
      width: 80px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;

      border: solid 2px transparent;
      border-top-color: #fff;

      animation: rotate 1s infinite linear;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    `
  )

  return _.$['loading-component'](
    {class: 'loading-component'},
    {
      children: [
        style,
        _.div({class: 'effect'})
      ]
    },

  )
}

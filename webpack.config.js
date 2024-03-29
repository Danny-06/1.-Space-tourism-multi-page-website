import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const resolvePath = relativePath => path.resolve(__dirname, relativePath)

const Modes = {
  NONE: 'none',
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}


const config = {
  mode: Modes.PRODUCTION,
  devtool: 'source-map',
  // devtool: 'inline-source-map',

  experiments: {
    topLevelAwait: false,
  },

  devServer: {
    static: {
      directory: resolvePath('./dist'),
    },
    port: 8080,
    // Redirect not found routes to index.html
    historyApiFallback: {
      index: './index.html'
    },
    https: false,
  },

  resolveLoader: {
    modules: ['node_modules', 'custom-webpack/loaders']
  },
  module: {
    rules: [
      {
        test: /\.json/,
        loader: 'jsonc-loader.cjs'
      },
      {
        test: /\.txt/,
        loader: 'txt-loader.cjs'
      },
      {
        test: /\.css/,
        use: [
          {loader: 'constructed-stylesheets-loader.cjs'},
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-conditionals']
              }
            }
          },
          {loader: 'postcss-loader'},
        ]
      },
      {
        test: /\.html/,
        loader: 'html-document-fragment-loader.cjs'
      }
    ]
  }
}

const entries = [
  {
    ...config,

    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: resolvePath('./dist')
    },
  }
]

export default entries

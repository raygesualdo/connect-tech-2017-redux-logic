/* eslint-disable */

const { join } = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

const PORT = process.env.PORT || 3000

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.use('/public', express.static('public'))

app.get('*', (req, res) => res.sendFile(join(__dirname, 'index.html')))

app.listen(PORT, 'localhost', err => {
  if (err) return console.log(err)
  console.log('Listening at http://localhost:' + PORT)
})

import express from 'express'
// var express = require('express')
// const React = require('react')
import React from 'react'
// const { renderToString } = require('react-dom/server')
import {renderToString} from 'react-dom/server'
// const Home = require('./components/Home/index')
import Home from './components/Home/index'
import { StaticRouter } from 'react-router-dom'
import Routes from './Routes'
var app = express()
app.use(express.static('public'))
const App = class extends React.Component{
  render() {
        return React.createElement('h3',null,'Hello World')
    }
}
app.get('*', function (req, res) {
  // 根据createElement创建的React元素，来生成一个html字符串。
  // const htmlContent = renderToString(<Home/>)
  const htmlContent = renderToString((
    <StaticRouter>
      {Routes}
    </StaticRouter>
  ))
  // res.send(htmlContent)
  res.send(`
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
          <div id="root">${htmlContent}</div>
      </body>
      <script src="/index.js"></script>
    </html>
  `)
})
var server = app.listen(3000)
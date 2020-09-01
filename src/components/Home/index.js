// const React = require('react')
import React from 'react'
import Common from '../common'
const Home = () => {
  return <div>Hello world
        <Common></Common>
        <button onClick={() => {alert('hello world')}}>单击</button>
    </div>
}
// module.exports = {default:Home}
export default Home
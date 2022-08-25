import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar} from './components'
const App = () => {
    return (
      <Router>
      <div className="app">
          <div className="navbar">
              <Navbar/>
          </div>
          <div className="main">
              
          </div>
          <div className="footer">
              
          </div>
            </div>
            </Router>
  )
}

export default App
import React , { Component } from 'react'
import './App.css'
import Header from '../src/components/Header'
import InputDetailsHooks from '../src/components/InputDetailsHooks'
import Footer from '../src/components/Footer'

class App extends Component {
  	constructor(props) {
      super (props)
    }

    render () {
      return (
        <div className="container">
          <Header/>
          <br/>
          <br/>
          <InputDetailsHooks/>
          <br/>
          <br/>
          
          <Footer/>
        </div>
      )
    }
}

export default App
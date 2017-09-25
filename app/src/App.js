import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import configureStore from './configureStore'

import AppContainer from './Containers/App'

const store = configureStore()

function App(props) {
  
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App



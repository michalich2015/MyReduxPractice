import React from 'react'
import ReactDom from 'react-dom'
import {createStore,bindActionCreators} from 'redux';
import reducer from './reducer'
import {Provider} from 'react-redux'
import App from './components/app'

const store=createStore(reducer);

    ReactDom.render(
      <Provider store={store}>
        <App/>
      </Provider>,document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import store from './APP';
ReactDOM.render(<App store={state}/>,document.getElementById('root'))
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})
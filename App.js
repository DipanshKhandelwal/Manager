import React from 'react';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './src/Router';

export default class App extends React.Component {
componentWillMount() {
  const config = {
    apiKey: 'AIzaSyAUKe_PLEuVSvps5-X3gHqTjXjhUSX3HAc',
    authDomain: 'manager-ccb4d.firebaseapp.com',
    databaseURL: 'https://manager-ccb4d.firebaseio.com',
    projectId: 'manager-ccb4d',
    storageBucket: 'manager-ccb4d.appspot.com',
    messagingSenderId: '960107962155'
  };

  firebase.initializeApp(config);
}

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <Router />
      </Provider>
    );
  }
}

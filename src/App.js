import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDKJmm7SC-RgWP6UJ22dV9NbkqyYwLT1Vs',
      authDomain: 'react-manager-799c0.firebaseapp.com',
      databaseURL: 'https://react-manager-799c0.firebaseio.com',
      projectId: 'react-manager-799c0',
      storageBucket: 'react-manager-799c0.appspot.com',
      messagingSenderId: '884250531097'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

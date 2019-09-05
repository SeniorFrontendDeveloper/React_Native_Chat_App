/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './app/store';
import {StatusBar} from 'react-native';
import ChatApp from './app/components/ChatApp';

const store = configureStore();

export default class App extends Component {
  render() {
    StatusBar.setBackgroundColor("#005DA6");
    StatusBar.setBarStyle("light-content");
    return (
      <Provider store={store}>
        <ChatApp />
      </Provider>
    );
  }
}

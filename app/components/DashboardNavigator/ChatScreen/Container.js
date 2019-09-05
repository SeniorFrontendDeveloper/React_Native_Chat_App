import React, { Component } from 'react'

import ChatScreen from './Component'
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class ChatScreenContainer extends Component {
  
  goBack(){
    this.props.navigation.navigate('Home');
  }

  render() {
    const selectedUser = this.props.navigation.state.params.selectedUser;
    return (
      <ChatScreen selectedUser={selectedUser} goBack={() => this.goBack()}/>
    )
  }
}

export default ChatScreenContainer

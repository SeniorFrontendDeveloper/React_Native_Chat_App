import React from 'react'
import { View } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'
import MessageHeader from './MessageHeader'

import styles from './Styles'

const ChatScreenComponent = props =>
  <View style={styles.container}>
    <MessageHeader goBack={props.goBack} selectedUser={props.selectedUser}/>
    <MessagesList selectedUser={props.selectedUser}/>
    <MessageForm />
  </View>

export default ChatScreenComponent

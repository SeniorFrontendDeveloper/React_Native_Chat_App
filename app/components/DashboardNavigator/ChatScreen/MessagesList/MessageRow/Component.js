import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import relativeDate from 'relative-date'

import styles from './Styles'
import translations from '../../../../../i18n'

const MESSAGE_TEXT_MARGIN = 50

const MessageRowComponent = props => {
  const isCurrentUser = props.isCurrentUser
  const alignItems = isCurrentUser ? 'flex-end' : 'flex-start'
  const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN}
  const username = isCurrentUser ? translations.t('you') : props.message.user.email
  const date = relativeDate(new Date(props.message.createdAt))
  const userImage = <Image source={{uri: props.selectedUser.avatar_url}} style={styles.avatarStyle}
  />;
  return (
    <View style={{flex: 1,justifyContent:'flex-end'}}>
      <View
        style={[styles.container, isCurrentUser ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}]}>
        {isCurrentUser ? null : userImage}
        <View>
          <View
            style={ [isCurrentUser ? styles.bubbleView : styles.mineMessage, {alignItems: alignItems}] }>
            <Text
              style={isCurrentUser ? styles.mineText : styles.userText}>
              {props.message.text}
            </Text>
          </View>
          <View style={[{alignItems: alignItems},{flex: 0}]}>
            <Text style={{fontSize: 15}}>
              {date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

MessageRowComponent.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    })
  })
}

export default MessageRowComponent

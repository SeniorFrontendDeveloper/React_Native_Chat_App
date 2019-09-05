// Component.js file will be in charge of implementing the UI
import React from 'react'
import PropTypes from 'prop-types'
 
import { ActivityIndicator } from 'react-native'
 
import AuthScreen from '../AuthScreen'
 
import styles from './Styles'
import DashboardNavigator from '../DashboardNavigator';
 
const ChatAppComponent = props => {
  if (props.restoring) {
    return <ActivityIndicator style={styles.activityIndicator} />
  } else {
    if (props.logged) {
      return <DashboardNavigator />
    } else {
      return <AuthScreen />
    }
  }
}
 
ChatAppComponent.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
}

export default ChatAppComponent
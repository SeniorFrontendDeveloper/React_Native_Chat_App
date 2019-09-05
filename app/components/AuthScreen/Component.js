// This component will be the wrapper for the login and registration tabs
// and will display te loading indicator and errors.
// This component will keep track of state changes and, for loading or errors,
// display and indicator or an error alert.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Alert } from 'react-native'
 
import AuthTabs from './AuthTabs'
import LoadingIndicator from './LoadingIndicator'
 
import translations from '../../i18n'
 
import styles from './Styles'
 
class AuthScreenComponent extends Component {
 
  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      Alert.alert(translations.t('error'), this.props.error);
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <AuthTabs />
        {this.props.loading && <LoadingIndicator />}
      </View>)
  }
}
 
AuthScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
 
export default AuthScreenComponent
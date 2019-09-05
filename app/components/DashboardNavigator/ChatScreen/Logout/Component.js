import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image} from 'react-native'

import styles from './Styles'

const LogoutComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>

    <Image source={require('../../../../images/ic_exit_to_app.png')} />
  </TouchableOpacity>

LogoutComponent.propTypes = {
  logout: PropTypes.func.isRequired
}

export default LogoutComponent

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logoutUser } from '../../../../store/session'

import Logout from './Component'

const LogoutContainer = props =>
  <Logout logout={props.logout} />

const mapDispatchToProps = {
  logout: logoutUser
}

LogoutContainer.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(LogoutContainer)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MessageRow from './Component'

import firebaseService from '../../../../../services/firebase'

class MessageRowContainer extends Component {

  render() {
    const isCurrentUser = firebaseService.auth().currentUser.email == this.props.message.user.email;
    console.log("selectedUser: ",this.props.userInformation);
    return (
      <MessageRow
        message={this.props.message}
        isCurrentUser={isCurrentUser}
        selectedUser = {this.props.userInformation}
        />
    );
  }
}

MessageRowContainer.propTypes = {
  message: PropTypes.object.isRequired,
}

export default MessageRowContainer

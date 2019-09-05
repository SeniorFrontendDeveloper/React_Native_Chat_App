import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadMessages } from '../../../../store/chat/actions'
import { getChatItems } from '../../../../store/chat/selectors'
import firebaseService from '../../../../services/firebase'

import MessageListComponent from './Component'

class MessagesListContainer extends Component {

  componentDidMount() {
    this.props.loadMessages()
  }

  render() {
    const isCurrentUser = firebaseService.auth().currentUser.email;
    const data = getChatItems(this.props.messages).reverse();
    const selectedUser = this.props.selectedUser;
    const selectedUserMessage = data.filter(item => ((item.user.email == selectedUser.email) || (item.user.email == isCurrentUser)));
    console.log("message list:",selectedUserMessage);
    return (
      <MessageListComponent
        data={selectedUserMessage} selectedUser={selectedUser} />
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  error: state.chat.loadMessagesError
})

const mapDispatchToProps = {
  loadMessages
}

MessagesListContainer.propTypes = {
  messages: PropTypes.object,
  error: PropTypes.string,
  loadMessages: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)

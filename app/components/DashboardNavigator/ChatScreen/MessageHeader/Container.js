import React, { Component } from 'react'

import MessageHeaderComponent from './Component'

class MessageHeaderContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <MessageHeaderComponent goBack={this.props.goBack} selectedUser={this.props.selectedUser}/>
        )
    }
}

export default MessageHeaderContainer

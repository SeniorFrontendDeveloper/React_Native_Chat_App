import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
 
import ProfileComponent from './Component'
 
class ProfileContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedUser: null
    }
  }

  componentDidMount() {
    this.setState({
      selectedUser: this.props.navigation.state.params.user
    })
  }

  goBack(){
    this.props.navigation.navigate('Home');
  }

  goChattingPage(){
    this.props.navigation.navigate('ChatScreen',{selectedUser: this.state.selectedUser});
  }

  render() {
    const user = this.props.navigation.state.params.user;
    return (
      <ProfileComponent selectedUser={user} goBack={() => this.goBack()} goChat={() => this.goChattingPage()}/>
      )
  }
}
 
const mapStateToProps = state => ({
  loading: state.session.loading,
  error: state.session.error,
})
 
ProfileContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
 
export default connect(mapStateToProps)(ProfileContainer)

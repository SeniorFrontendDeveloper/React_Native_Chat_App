import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
 
import ChatGroupComponent from './Component'
import firebaseService from '../../../services/firebase'
import '@firebase/database';
 
class ChatGroupContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    goNavigation(){
        this.props.navigation.openDrawer();
    }
    getUsersData() {
        firebaseService.database().ref('users/').on('value', (snapshot) => {
            const data = snapshot.val();
            const items = Object.values(data);
            const filteredItems = items.filter(item => item.email !== firebaseService.auth().currentUser.email)
            this.setState({
                users: filteredItems
            });
        });
    }

    getSelectedUser(item){
        this.props.navigation.navigate('Profile',{user: item});
    }
    
    componentDidMount() {
        this.getUsersData();
    }

    render() {
      return (
        <ChatGroupComponent users={this.state.users} onButtonPress={(item) => this.getSelectedUser(item)} goNavigation={() => this.goNavigation()}/>
        )
    }
}
 
const mapStateToProps = state => ({

})
 
ChatGroupContainer.propTypes = {

}
 
export default connect(mapStateToProps)(ChatGroupContainer)

import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './Styles'
import Logout from '../Logout'

const MessageHeaderComponent = props =>
    <View style={styles.container}>
        <View style={styles.headerLeft}>
            <TouchableOpacity onPress={props.goBack}>
                <Image source={require('../../../../images/back.png')}/>
            </TouchableOpacity>
            {/* <Image source={require('../../../../images/avatar.png')} style={styles.avatarImage}/>
            <Text style={styles.textName}>Kosim Juke</Text> */}
            <Image source={{uri: props.selectedUser.avatar_url}} style={styles.avatarImage}/>
            <Text style={styles.textName}>{props.selectedUser.name}</Text>
        </View>
        <View style={{marginRight: 10}}>
            <Logout />
        </View>
    </View>

export default MessageHeaderComponent

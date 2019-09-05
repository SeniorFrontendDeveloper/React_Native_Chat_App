// Component.js file will be in charge of implementing the UI
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Styles'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';

const personList = [
    {
        name: 'Mamat Stablis',
        subtitle: 'Lorem ipsum',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman',
        avatar_url: 'https://cdn-images-1.medium.com/fit/c/54/54/1*q7r1sgssw85tgML8NTqYOA.jpeg',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Amanda Martin',
        subtitle: 'CEO',
        avatar_url: 'https://cdn-images-1.medium.com/fit/c/55/55/1*eTRp-Hq8D18ewx4UgtwRSQ.jpeg',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Christy Thomas',
        subtitle: 'Lead Developer',
        avatar_url: 'https://cdn-images-1.medium.com/fit/c/40/40/0*T9-x7NWjlSaPQLFY.jpeg',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Melissa Jones',
        subtitle: 'CTO',
        avatar_url: 'https://secure.gravatar.com/avatar/e7d1ba5ff04208824be7e0af1282c5cd?s=26&amp;d=mm&amp;r=g',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Jajang Serbet',
        subtitle: 'Lorem ipsum',
        avatar_url: 'https://cdn-images-1.medium.com/fit/c/45/45/1*SwPra8Lbty2gCAzmPZv4yQ.jpeg',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Jonhy Gelas',
        subtitle: 'Lorem ipsum',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        chatTime: '2:04 PM',
        chatCount: '01'
    },
    {
        name: 'Kosim Juke',
        subtitle: 'Lorem ipsum',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        chatTime: '2:04 PM',
        chatCount: '01'
    }
]

const shadowStyle = {
    shadowColor: '#ed7171',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5
}
 

const ChatGroupComponent = props =>

    <View style={styles.container}>
    <View>
    <View style={styles.headerContainer}>
        <ImageBackground source={require('../../../images/header.png')} style={styles.headerContainer}> 
          <View style={styles.imageIcon}>
            <Image source={require('../../../images/ring.png')}
            style={{width: 25, height: 25}} />
          </View>
          <View style={styles.imageIcon}>
            <TouchableOpacity
                onPress={props.goNavigation}>
                <Image
                    style={{ width: 25, height: 23}}
                    source={require('../../../images/navigation.png')}
                />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
    <ScrollView style={styles.scrollviewStyle}>
        <FlatList
            data={props.users}
            keyExtractor={item => item.email}
            renderItem={
                ({item}) => <TouchableOpacity style={[styles.button,shadowStyle]} onPress={() => props.onButtonPress(item)}>
                                <View style={styles.layoutStyle}>
                                    <View style={{marginRight: 20}}>
                                        <Image source={{uri: item.avatar_url}} style={styles.imageStyle}/>
                                    </View>
                                    <View>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={styles.itemChattime}>2:04 PM</Text>
                                        <Text style={styles.itemChatcount}>01</Text>
                                    </View>
                                </View>
                                
                            </TouchableOpacity>
            }
        >
        </FlatList>
    </ScrollView>
</View>
 
ChatGroupComponent.propTypes = {
}
 
export default ChatGroupComponent

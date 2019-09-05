import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';
 
import styles from './Styles'

const profileInformation = {
    name: 'Jonhy Gelas',
    location: 'USA',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    travels: [
        {
            date: '14/06/2019',
            where: 'USA'
        },
        {
            date: '20/07/2019',
            where: 'GERMANY'
        },
    ],
    images: [
        {
            image_url: require('../../../images/famous1.jpg')
        },
        {
            image_url: require('../../../images/famous2.jpg')
        },
        {
            image_url: require('../../../images/famous3.jpg')
        },
        {
            image_url: require('../../../images/famous4.jpg')
        },
        {
            image_url: require('../../../images/famous5.jpg')
        },
        {
            image_url: require('../../../images/famous6.jpg')
        },
        {
            image_url: require('../../../images/famous7.jpg')
        },
        {
            image_url: require('../../../images/famous8.jpg')
        }
    ]
}

const shadowStyle = {
    shadowColor: '#ed7171',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5
}
 
const ProfileComponent = props =>
 
    <View style={styles.container}>
        <View>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../../../images/header2.png')} style={styles.headerContainer}> 
                <View style={styles.imageIcon}>
                    <TouchableOpacity onPress={props.goBack}>
                    <Image source={require('../../../images/back.png')}
                    style={{width: 25, height: 25}} />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.imageIcon}>
                    <Text style={{color: '#ffffff', fontSize: 25, fontWeight: '300'}}>Profile</Text>
                </View>
                <View style={styles.imageIcon}>
                </View>
                </ImageBackground>
            </View>
        </View>
        <View style={styles.contentContainer}>
            <View style={[styles.cardStyle,shadowStyle]}>
                <View style={styles.layoutStyle}>
                    <View style={{marginRight: 15}}>
                        <Image source={{uri: props.selectedUser.avatar_url}} style={styles.avatarStyle}/>
                    </View>
                    <View style={{flex: 0, alignItems: 'flex-start'}}>
                        <Text style={styles.itemName}>{props.selectedUser.name}</Text>
                        <Text style={styles.itemSubtitle}>{props.selectedUser.country}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.itemDetail}>{profileInformation.detail}</Text>
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.goChat}>
                    <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.travelCard,shadowStyle]}>
                <Text style={{fontSize:20, color: '#0065B4', paddingVertical: 10}}>Next Travels</Text>
                <FlatList
                    data={profileInformation.travels}
                    renderItem={
                        ({item}) => <View style={styles.travelStyle}>
                                        <View style={{flex: 0, flexDirection: 'row', marginRight: 20}}>
                                            <Text style={{fontSize:18, color: '#0065B4'}}>Date: </Text>
                                            <Text style={{fontSize:18, color: '#838383'}}>{item.date}</Text>
                                        </View>
                                        <View style={{flex: 0, flexDirection: 'row'}}>
                                            <Text style={{fontSize:18, color: '#0065B4'}}>Where: </Text>
                                            <Text style={{fontSize:18, color: '#838383'}}>{item.where}</Text>
                                        </View>
                                    </View>
                    }
                />
                
            </View>
            <ScrollView contentContainerStyle={{marginTop: 20}}>
                <FlatList
                    horizontal
                    data={profileInformation.images}
                    renderItem={
                        ({item}) => <View style={{paddingHorizontal: 10}}>
                                        <Image source={item.image_url} style={styles.imageStyle}/>
                                    </View>
                    }
                />
            </ScrollView>
        </View>
    </View>
 
ProfileComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
 
export default ProfileComponent


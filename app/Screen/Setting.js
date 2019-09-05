import React, {Component} from 'react';
import {StyleSheet, 
    View,
    SectionList,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import SettingsHeader from './SettingsHeader';

const settingsData = [
    {
        title: 'Account',
        data: [
            {
                name: 'Personal Info',
                image: require('../images/Info.png')
            },
            {
                name: 'Payment Methods',
                image: require('../images/Info1.png')
            },
            {
                name: 'Linked Accounts',
                image: require('../images/Info2.png')
            }
        ]
    },
    {
        title: 'Security',
        data: [
            {
                name: 'Passcode Lock',
                image: require('../images/Info3.png')
            },
            {
                name: 'Privacy',
                image: require('../images/Info4.png')
            },
            {
                name: 'Linked Accounts',
                image: require('../images/Info.png')
            }
        ]
    },
    {
        title: 'System',
        data: [
            {
                name: 'Passcode Lock',
                image: require('../images/Info1.png')
            },
            {
                name: 'Privacy',
                image: require('../images/Info2.png')
            },
            {
                name: 'Linked Accounts',
                image: require('../images/Info3.png')
            }
        ]
    } 
];
    

export default class Setting extends Component {
    render() {
        const shadowStyle = {
            shadowColor: '#ed7171',
            shadowOpacity: 0.8,
            shadowRadius: 10,
            elevation: 7
        }
        return (
        <View style={styles.container}>
            <View>
                <SettingsHeader {...this.props}/>
            </View>
            <View style={[styles.contentContainer,shadowStyle]}>
                <SectionList style={{width: '100%'}}
                    sections={settingsData}
                    renderSectionHeader={({section}) => {
                        return (
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {section.title}
                                </Text>
                            </View>
                        )
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => {}} style={styles.listContainer}>
                                <View style={{flex: 0,flexDirection: 'row',alignItems: 'center'}}>
                                    <View>
                                        <Image style={styles.image} source={item.image}/>
                                    </View>
                                    <View style={styles.content}>
                                        <View style={styles.contentHeader}>
                                            <Text  style={styles.name}>{item.name}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Image source={require('../images/right.png')}/>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  contentContainer: {
    flex: 0,
    alignItems: 'flex-start',
    position: 'relative',
    bottom: 70, 
    backgroundColor: '#ffffff', 
    width: 360, 
    borderRadius: 10
  },
  titleContainer:{
    borderBottomColor: '#E9ECF2',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  title:{
    fontSize:20,
    color:"#0065B5"
  },
  listContainer: {
    flex: 0,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#E9ECF2',
    borderBottomWidth: 1,
    paddingHorizontal: 20
  },
  content: {
    marginLeft: 16,
    flex: 0,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  image:{
    width:45,
    height:45
  },
  name:{
    fontSize:18,
    color: '#AAB7CC'
  },
});
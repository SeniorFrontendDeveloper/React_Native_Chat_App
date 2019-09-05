import React, {Component} from 'react';
import {StyleSheet, 
  View,
  Image,
  Text,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SettingsHeader extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/header2.png')} style={styles.container}> 
          <View style={styles.imageIcon}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../images/back.png')}
            style={{width: 25, height: 25}} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.imageIcon}>
            <Text style={{color: '#ffffff', fontSize: 25, fontWeight: '300'}}>Setting</Text>
          </View>
          <View style={styles.imageIcon}>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
    width: '100%'
  },
  imageIcon: {
    marginBottom: 60
  }
});

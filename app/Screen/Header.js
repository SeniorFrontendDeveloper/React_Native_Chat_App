import React, {Component} from 'react';
import {StyleSheet, 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';

export default class Header extends Component {
    render() {
        const shadowStyle = {
            shadowColor: '#ed7171',
            shadowOpacity: 0.8,
            shadowRadius: 10,
            shadowOffset: {width: 0, height: 0},
            elevation: 7
        }
        return (
          <View style={styles.headerContainer}>
            <ImageBackground source={require('../images/header.png')} style={styles.headerContainer}> 
              <View style={styles.imageIcon}>
                <Image source={require('../images/ring.png')}
                style={{width: 25, height: 25}} />
              </View>
              <View style={styles.imageIcon}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Image
                        style={{ width: 25, height: 23}}
                        source={require('../images/navigation.png')}
                    />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 200,
        width: '100%'
      },
      imageIcon: {
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 35
      }
});



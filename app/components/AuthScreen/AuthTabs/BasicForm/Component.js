import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, ScrollView } from 'react-native'
 
import translations from '../../../../i18n'
 
import styles from './Styles'
 
class BasicFormComponent extends Component {
 
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', };
 
    this.handleEmailChange = (email) => {
      this.setState({email: email})
    }
 
    this.handlePasswordChange = (password) => {
      this.setState({password: password})
    }
 
    this.handleButtonPress = () => {
      this.props.onButtonPress(this.state.email, this.state.password)
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
            <ImageBackground source={require('../../../../images/header.png')} style={styles.headerContainer}> 
              <View style={styles.imageIcon}>
                <Image source={require('../../../../images/ring.png')}
                style={{width: 25, height: 25}} />
              </View>
              <View style={styles.imageIcon}>
                <TouchableOpacity>
                    <Image
                        style={{ width: 25, height: 23}}
                        source={require('../../../../images/navigation.png')}
                    />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <ScrollView style={{paddingTop: 50}}>
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={translations.t('email')}
                  placeholderTextColor="#ffffff"
                  returnKeyType='next'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={this.handleEmailChange}
                  value={this.state.email}
                />
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={translations.t('password')}
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"
                  returnKeyType='done'
                  onChangeText={this.handlePasswordChange}
                  value={this.state.password}
                  />
              <TouchableOpacity 
                style={styles.button}
                onPress={this.handleButtonPress}
              >
                  <Text style={styles.buttonText}>{this.props.buttonTitle}</Text>
              </TouchableOpacity>

              <View style={styles.signupTextContent}>
                  <Text style={styles.signupText}>Please use the username and password shared with you
                  </Text>
              </View>
          </ScrollView>
      </View>
    );
  }
}
 
BasicFormComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
}
 
export default BasicFormComponent
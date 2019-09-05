import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
import { View, TextInput, TouchableOpacity, Text, ScrollView, ImageBackground, Image } from 'react-native'
import styles from './Styles'

import translations from '../../../../i18n'


class SignUpFormComponent extends Component {
 
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', country: '', phone: '' };
 
    this.handleNameChange = (username) => {
      this.setState({name: username})
    }

    this.handleEmailChange = (email) => {
      this.setState({email: email})
    }
 
    this.handlePasswordChange = (password) => {
      this.setState({password: password})
    }

    this.handleCountryChange = (country) => {
      this.setState({country: country})
    }

    this.handlePhoneNumberChange = (phonenumber) => {
      this.setState({phone: phonenumber})
    }
 
    this.handleButtonPress = () => {
      this.props.signup(this.state.name, this.state.email, this.state.password, this.state.country, this.state.phone)
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
        <ScrollView>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder={translations.t('name')}
                placeholderTextColor="#ffffff"
                returnKeyType='next'
                autoCapitalize='none'
                onChangeText={this.handleNameChange}
                value={this.state.name}
              />
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
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder={translations.t('country')}
                placeholderTextColor="#ffffff"
                returnKeyType='next'
                autoCapitalize='none'
                onChangeText={this.handleCountryChange}
                value={this.state.country}
              />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder={translations.t('phone')}
                placeholderTextColor="#ffffff"
                returnKeyType='next'
                keyboardType='numeric'
                autoCapitalize='none'
                onChangeText={this.handlePhoneNumberChange}
                value={this.state.phone}
              />

            <TouchableOpacity 
              style={styles.button}
              onPress={this.handleButtonPress}
            >
                <Text style={styles.buttonText}>{translations.t('signup')}</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
 
SignUpFormComponent.propTypes = {
  signup: PropTypes.func.isRequired
}

 
// const SignUpFormComponent = props =>
//   <BasicForm
//     buttonTitle={translations.t('signup')}
//     onButtonPress={props.signup} />
 
// SignUpFormComponent.propTypes = {
//   signup: PropTypes.func.isRequired
// }
 
export default SignUpFormComponent
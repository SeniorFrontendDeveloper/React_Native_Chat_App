import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  inputBox: {
    width: 350,
    height: 45,
    backgroundColor: '#1c2635',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize:16,
    color: '#ffffff',
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    width: 350,
    backgroundColor: '#33cc80',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: '500'
  },
  signupTextContent: {
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  signupText: {
      color: '#1c2635',
      fontSize: 16,
      width: 250,
      textAlign: 'center'
  },
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
})

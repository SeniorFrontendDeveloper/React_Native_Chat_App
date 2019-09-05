import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '100%',
    backgroundColor: '#ffffff',
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
    paddingLeft: 10
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3
  },
  button: {
    flex: 0,
    alignItems: 'center',
    justifyContent:'center',
    height: 40
  },
  imageAddStyle:{
    width: 50,
    height: 50
  },
  sendImageStyle:{
    width: 110, 
    height: 60
  }
  
})

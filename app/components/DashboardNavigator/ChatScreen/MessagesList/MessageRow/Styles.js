import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5
  },
  bubbleView: {
    backgroundColor: '#007DE0',
    borderRadius: 8,
    padding:8,
  },
  mineMessage: {
    backgroundColor: '#E3E5EF',
    borderRadius: 8,
    padding:8,
  },
  userText: {
    color: '#7B869C',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  mineText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  avatarStyle: {
    borderRadius: 50,
    marginRight: 10,
    width: 70,
    height: 70
  }

})

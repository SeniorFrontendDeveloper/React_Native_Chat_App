import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
      },
      contentContainer: {
        flex: 0,
        alignItems: 'center',
        position: 'relative',
        bottom: 70, 
        backgroundColor: '#ffffff', 
        width: 380, 
        borderRadius: 10
      },
      cardStyle: {
        flex: 0,
        alignItems: 'flex-start',
        width: 380,
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 40,
        paddingHorizontal: 30
      },
      buttonGroup: {
        flex: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        bottom: 30,
        width: 330
      },
      button: {
        width: 150,
        borderRadius: 30,
        backgroundColor: '#0068BA',
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center'
      },
      itemName: {
          fontSize: 25,
          color: '#0065B4',
          textAlign: 'center'
      },
      itemSubtitle: {
        fontSize: 20,
        color: '#838383',
        textAlign: 'center'
      },
      itemDetail: {
        fontSize: 15,
        color: '#838383',
        textAlign: 'left'
      },
      travelCard: {
        flex: 0,
        alignItems: 'flex-start',
        width: 380,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30
      },
      travelStyle: {
        flex: 0,
        flexDirection: 'row',
        paddingVertical: 10
      },
      avatarStyle: {
          width: 80,
          height: 80,
          borderRadius: 50
      },
      imageStyle: {
        width: 180,
        height: 200,
        borderRadius: 15
      },
      layoutStyle: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10
      },
      headerContainer: {
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
})

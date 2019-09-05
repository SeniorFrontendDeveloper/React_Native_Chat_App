import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
      },
      scrollviewStyle: {
        marginTop: 20
      },
      button: {
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 360,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
      },
      itemName: {
          fontSize: 22,
          color: '#131E41',
          textAlign: 'center'
      },
      itemSubtitle: {
        fontSize: 18,
        color: '#838383',
        textAlign: 'center'
      },
      itemChattime: {
        fontSize: 18,
        color: '#0076D2',
        textAlign: 'center'
      },
      itemChatcount: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#0076D2',
        textAlign: 'center',
        width: 30,
        height: 30,
        borderRadius: 50,
        paddingTop: 2,
      },
      imageStyle: {
          width: 60,
          height: 60,
          borderRadius: 50
      },
      layoutStyle: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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

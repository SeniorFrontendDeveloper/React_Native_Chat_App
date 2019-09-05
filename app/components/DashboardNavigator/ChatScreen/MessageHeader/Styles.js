import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#007DE0', 
        flex: 0, flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    headerLeft: {
        flex: 0, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: 20,
        paddingVertical: 10
    },
    avatarImage: {
        borderRadius: 50, 
        width:40, 
        height:40, 
        marginHorizontal: 10
    },
    textName: {
        color: 'white', 
        fontSize: 22, 
        fontWeight: '300'
    }
})

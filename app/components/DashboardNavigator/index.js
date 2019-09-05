import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import {Dimensions} from 'react-native'

import ChatGroup from './ChatGroup'
import ChatScreen from './ChatScreen'
import Profile from './Profile'
import Country from '../../Screen/Country'
import Cities from '../../Screen/Cities'
import Setting from '../../Screen/Setting'

const deviceWidth = Dimensions.get("window").width;

const AppNavigator = createDrawerNavigator(
{
    Home: { screen: ChatGroup },
    ChatScreen: { screen: ChatScreen },
    Profile: { screen: Profile },
    Country: { screen: Country },
    Cities: { screen: Cities },
    Setting: { screen: Setting }
},
{
    drawerWidth: deviceWidth - 50,
    initialRouteName: 'Home',
    drawerPosition: 'left'
}
);

export default createAppContainer(AppNavigator)
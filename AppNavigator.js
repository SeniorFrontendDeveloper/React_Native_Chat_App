import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Country from './app/Screen/Country';
import Cities from './app/Screen/Cities';
import ChatGroup from './app/components/ChatGroup';
import Profile from './app/components/Profile';
import Setting from './app/Screen/Setting';
import ChatApp from './app/components/ChatApp';
import ChatScreen from './app/components/ChatScreen';

import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get("window").width;

const AppNavigator = createDrawerNavigator(
{
    Home: { screen: ChatApp },
    Country: { screen: Country },
    Cities: { screen: Cities },
    ChatGroup: {screen: ChatGroup},
    Profile: { screen: Profile },
    ChatScreen: { screen: ChatScreen },
    Setting: { screen: Setting }
},
{
    drawerWidth: deviceWidth - 50,
    initialRouteName: 'Home',
    drawerPosition: 'left'
}
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
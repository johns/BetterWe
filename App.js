import React, {Component} from "react";
import { AppRegistry } from "react-native";
import Setup from "./src/client/config/setup";
import {
    Text, Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign/';
import Home from "./src/client/screens/Home/Home";
import Login from "./src/client/screens/Login/Login";
import CreateAccount from "./src/client/screens/CreateAccount/CreateAccount";
import CreateChat from "./src/client/screens/CreateChat/CreateChat";
import ChatRoom from "./src/client/screens/ChatRoom/ChatRoom";
import colors from './src/client/lib/colors/';


// static navigationOptions = {
// headerTitle: <LogoTitle />,
// headerRight: (
//   <Button
//     onPress={() => alert('This is a button!')}
//     title="Info"
//     color="#fff"
//   />
// ),
// };
// ^^ Meant for specific pages / Header

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'BetterWe',
        headerVisible: true,
        headerRight: (
          <Icon
            name="plus"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('CreateChat')}
          /> ),
          headerLeft: (
            <Icon
              name="user"
              size={30}
              color={colors.primaryBlue}
              style={{marginLeft: 10, marginRight: 10}}
              onPress={() =>  alert("Account Settings Incomplete")}
            /> )
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
    CreateAccount: {
      screen: CreateAccount,
      navigationOptions: ({navigation}) => ({
        title: 'Create An Account',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('Login')}
          /> )
      }),
    },
    CreateChat: {
      screen: CreateChat,
      navigationOptions: ({navigation}) => ({
        title: 'Create New Chat',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('Home')}
          /> )
      }),
    },
    ChatRoom: {
      screen: ChatRoom,
      navigationOptions: ({navigation}) => ({
        title: '[ROOM NAME]',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('Home')}
          /> ),
        headerRight: (
          <Icon
            name="infocirlceo"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => alert("Chat Info Incomplete")}
          /> )
      }),
    },
  },
  {
    initialRouteName: "Login",
  }
)



const AppContainer = createAppContainer(RootStack);

export default AppContainer;


AppRegistry.registerComponent("BetterWe", () => App);

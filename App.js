import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, DrawerNavigator, SettingsNavigator, BottomTabNavigator } from './src/navigations';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  )
}

export default App;
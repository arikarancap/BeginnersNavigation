import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Wallet, Notifications, Settings } from '../screens';
import { CustomTabBarButton, CustomTabBar } from '../components';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { ROUTES, COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsNavigator from './SettingsNavigator';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator
            // tabBar={props => <CustomTabBar />}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.dark,
                tabBarStyle: Styles.tabBarStyle,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === ROUTES.HOME) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === ROUTES.WALLET) {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === ROUTES.NOTIFICATIONS) {
                        iconName = focused
                            ? 'md-notifications-sharp'
                            : 'md-notifications-outline';
                    }
                    return <Icon name={iconName} size={22} color={color} />;
                },

            })
            }
        >
            <Tab.Screen name={ROUTES.HOME} component={Home}
                options={{
                    tabBarButton: props => <CustomTabBarButton {...props} />
                    , showLabel: false
                }}
            />
            <Tab.Screen name={ROUTES.WALLET} component={Wallet}
                options={{
                    tabBarButton: props => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications}
                options={{
                    tabBarButton: props => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={SettingsNavigator}

                options={({ route }) => ({

                    user: false,
                    headerShown: false,
                    title: 'Settings',
                    tabBarButton: props => <CustomTabBarButton {...props} />,
                    // headerRight: ({ color, size, focused }) => {
                    //     return (
                    //         <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    //             <Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                    //                 size={30}
                    //                 color={COLORS.dark}
                    //             />
                    //         </TouchableOpacity>

                    //     )
                    // }
                    // title: route.params.userId, 
                })}

            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
const Styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: COLORS.bgColor,
        borderTopWidth: 0,
        bottom: 10,
        right: 5,
        left: 5,
        borderRadius: 10,
        // margin: 20
        height: 58
    }
})
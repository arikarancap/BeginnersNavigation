import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from '../constants';
import { Home, Notifications, Settings, Wallet } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
// import Home from '../screens/home/Home'
import React, { useState, createContext, useContext } from 'react';
import BottomTabNavigator from "./BottomTabNavigator";
import { CustomDrawer } from "../components";
const Drawer = createDrawerNavigator();



function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: COLORS.primary,
                drawerActiveTintColor: COLORS.white,
                // drawerLabelStyle: {marginLeft: -20}
            }}>
            <Drawer.Screen
                name={ROUTES.HOME_DRAWER}
                component={BottomTabNavigator}
                options={({ route }) => ({
                    // headerShown: route.params.user,
                    title: 'BottomTabNavigator',
                    drawerIcon: ({ color, size, focused }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                    // title: route.params.userId, 
                })}

            />
            <Drawer.Screen
                name={ROUTES.NOTIFICATIONS_DRAWER}
                component={Notifications}
                options={{
                    title: "Notifications",
                    drawerIcon: ({ color, size, focused }) => (
                        <Icon name="md-notifications-sharp" color={color} size={18} />
                    )

                }}
            />
            <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet}
                options={{
                    headerShown: true,
                    drawerIcon: ({ color, size, focused }) => (
                        <Icon name="wallet" color={color} size={18} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgotPassword, Register } from '../screens';
import { ROUTES, COLORS } from '../constants';
import DrawerNavigator from './DrawerNavigator';
const Stack = createStackNavigator();
function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen options={{ headerShown: true }} name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword}
                options={({ route }) => ({
                    headerTintColor: COLORS.white,
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                    // title: route.params.userId, 
                })}
            />
            <Stack.Screen options={{ headerShown: true }} name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.HOME} component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;


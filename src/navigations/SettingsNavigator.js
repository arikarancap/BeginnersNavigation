import React, { useState, createContext, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings, SettingDetail } from '../screens';
import { ROUTES } from '../constants';
const LoginContext = createContext();

const Stack = createStackNavigator();
// export const drawerFalse = ({ children }) => {
//     const [close, SetClose] = useState(true);
//     return <LoginContext.Provider value={{ close, SetClose }}>
//         {children}
//     </LoginContext.Provider>
// }

// export const useClose = () => useContext(LoginContext);
export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [SubMenu, setSubMenu] = useState(false);

    return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
        {children}
    </LoginContext.Provider>
}
export const sub = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return
}
export const useLogin = () => useContext(LoginContext)
function SettingsNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.SETTINGS} component={Settings} />
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.SETTINGS_DETAIL} component={SettingDetail} />
        </Stack.Navigator>
    )
}

export default SettingsNavigator;


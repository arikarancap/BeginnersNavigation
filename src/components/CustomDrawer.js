import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerList, DrawerItemList, } from '@react-navigation/drawer';
import { IMGS } from '../constants';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView >
            <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }} >
                <Image source={IMGS.user} style={Styles.userImg} />
            </ImageBackground>
            <View style={Styles.drawerListWrapper}>
                <DrawerItemList  {...props} />
            </View>
        </DrawerContentScrollView>
    )
}
export default CustomDrawer

const Styles = StyleSheet.create({
    userImg: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2,
        position: 'absolute',
        left: windowWidth / 2 - 110,
        bottom: -110 / 2,
    },
    drawerListWrapper: {
        marginTop: 55,
    }
})
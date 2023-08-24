import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, ROUTES } from '../../constants';
import LOGO from '../../assets/icons/LOGO.svg';
import { useNavigation } from '@react-navigation/native';
import Svg, { Use, Image, G, Path } from 'react-native-svg';
function SvgComponent(props) {
    return (
        <Svg
            fill="green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="500px"
            height="500px"
            {...props}
        >
            <Path d="M25 2c-4.22 0-8.17 1.14-11.57 3.13l20.72 15.14L38.8 6.61A22.923 22.923 0 0025 2zM11.64 6.29C5.81 10.46 2 17.3 2 25c0 1.73.19 3.42.57 5.04l20.74-15.22-11.67-8.53zm28.81 1.68L32.27 32H46.9c.72-2.21 1.1-4.56 1.1-7 0-6.74-2.92-12.81-7.55-17.03zM25 16.06l-8.44 6.19L19.71 32h10.45l3.32-9.75L25 16.06zM14.87 23.5L3.13 32.11c2.77 8.52 10.4 14.87 19.59 15.78L14.87 23.5zM20.35 34l4.52 14H25c9.49 0 17.65-5.78 21.16-14H20.35z" />
        </Svg>
    )
}
const Login = props => {
    // const {navigation} = props;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.wFull}>
                    <View style={styles.row}>
                        <LOGO width={55} height={55} style={styles.mr7} />

                        {/* <Log width={55} height={55} style={styles.mr7} /> */}
                        {/* <Svg width="80" height="80">
                            <Image href={require('../../assets/icons/Log.svg')} />
                        </Svg> */}

                        {/* <SvgComponent width="100%" height="100%" strokeWidth={5} /> */}

                        <Text style={styles.brandName}>Sparrow</Text>
                    </View>

                    <Text style={styles.loginContinueTxt}>Login in to continue</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Password" />

                    <View style={styles.loginBtnWrapper}>
                        <LinearGradient
                            colors={[COLORS.gradientForm, COLORS.primary]}
                            style={styles.linearGradient}
                            start={{ y: 0.0, x: 0.0 }}
                            end={{ y: 1.0, x: 0.0 }}>
                            {/******************** LOGIN BUTTON *********************/}
                            <TouchableOpacity
                                onPress={() => navigation.navigate(ROUTES.HOME)}
                                activeOpacity={0.7}
                                style={styles.loginBtn}>
                                <Text style={styles.loginText}>Log In</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    {/***************** FORGOT PASSWORD BUTTON *****************/}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                                userId: 'X0001',
                            })
                        }
                    // style={styles.forgotPassBtn}
                    >
                        <Text style={styles.forgotPassText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}> Don't have an account? </Text>
                    {/******************** REGISTER BUTTON *********************/}
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.REGISTER)}>
                        <Text style={styles.signupBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        // <View>
        //     <Text> Login</Text>
        // </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container: {
        padding: 15,
        width: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brandName: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
        opacity: 0.9,
    },
    loginContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: COLORS.gray,
        marginBottom: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.grayLight,
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
    },
    // Login Btn Styles
    loginBtnWrapper: {
        height: 55,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    linearGradient: {
        width: '100%',
        borderRadius: 50,
    },
    loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
    },
    loginText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '400',
    },
    forgotPassText: {
        color: COLORS.primary,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    },
    // footer
    footer: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: COLORS.gray,
        fontWeight: 'bold',
    },
    signupBtn: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    // utils
    wFull: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    mr7: {
        marginRight: 7,
    },
});
import { Image, StatusBar, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import AppTextInput from '../../Components/Global/AppTextInput.tsx'
import Fontisto from 'react-native-vector-icons/Fontisto.js'
import Ionicon from 'react-native-vector-icons/Ionicons.js'
import { moderateScale } from '../../Constants/PixelRatio.js'
import { COLORS } from '../../Constants/Colors.js'
import { FONTS } from '../../Constants/Fonts.js'


const SignIn = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.pageBackgroundColor} />
            <Image
                source={require('../../Assets/Image/linkedin.png')}
                style={styles.image}
            />

            <Text style={styles.headingText}>Welcome Back!</Text>
            <Text style={styles.subHeadingText}>Login to your existanc account</Text>

            <AppTextInput
                leftIcon={<Fontisto name="email" size={23} />}
                textContentType='emailAddress'
                title="Email"
                placeholder="Enter Your Email"
            />


            <AppTextInput
                leftIcon={<Ionicon name="key" size={23} />}

                textContentType='password'
                title="Password"
                placeholder="Enter Password"
                secureTextEntry={true}
            />
            <Text style={styles.forgotPassword}>Forgot Password ?</Text>
            <Pressable
                style={{ ...styles.googleBtn, backgroundColor: COLORS.primaryThemeColor }}>
                <Text style={{ ...styles.googleText, color: COLORS.secondaryThemeColor }}>SIGN IN</Text>
            </Pressable>
            <Text style={styles.sosalText}>Or login with social account</Text>

            <Pressable
                style={styles.googleBtn}>
                <Image
                    source={require('../../Assets/Image/search.png')}
                    style={{
                        height: moderateScale(27),
                        width: moderateScale(27),
                        marginRight: moderateScale(15),
                    }}
                />
                <Text style={styles.googleText}>Continue with Google</Text>
            </Pressable>
            <View style={styles.signInTextContainer}>
                <Text style={styles.mediumText}>Don't have an account?</Text>
                <Pressable onPress={() => NavigationService.navigate("SignUp")}>

                    <Text style={styles.boldText}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignIn


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.pageBackgroundColor,
        flex: 1
    },
    image: {
        width: moderateScale(100),
        height: moderateScale(100),
        alignSelf: 'center',
        marginTop: moderateScale(40),
    },
    headingText: {
        textAlign: 'center',
        fontFamily: FONTS.bold,
        fontSize: moderateScale(20),
        color: COLORS.primaryFontColor,
        marginTop: moderateScale(10),
    },
    subHeadingText: {
        textAlign: 'center',
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15),
        color: COLORS.primaryFontColor,
        marginTop: moderateScale(5),
    },
    signInTextContainer: {
        alignSelf: 'center',
        marginVertical: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    mediumText: {
        textAlign: 'center',
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        color: COLORS.primaryFontColor,
    },
    boldText: {
        textAlign: 'center',
        fontFamily: FONTS.bold,
        fontSize: moderateScale(15),
        color: COLORS.primaryThemeColor,
        marginLeft: moderateScale(7),
    },
    forgotPassword: {
        textAlign: 'right',
        marginRight: moderateScale(15),
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(15),
        marginTop: moderateScale(5),
    },
    sosalText: {
        textAlign: 'center',
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
        marginTop: moderateScale(25),
    },
    googleBtn: {
        marginTop: moderateScale(10),
        flexDirection: 'row',
        marginHorizontal: moderateScale(15),
        height: moderateScale(47),
        backgroundColor: '#fff',
        borderRadius: moderateScale(30),
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleText: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(16),
        color: COLORS.primaryFontColor,
    },
});
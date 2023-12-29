import { Image, StatusBar, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../../Components/Global/AppTextInput.tsx'
import Fontisto from 'react-native-vector-icons/Fontisto.js'
import Ionicon from 'react-native-vector-icons/Ionicons.js'
import { moderateScale } from '../../Constants/PixelRatio.js'
import { COLORS } from '../../Constants/Colors.js'
import { FONTS } from '../../Constants/Fonts.js'
import { useDispatch } from 'react-redux'
import Simpletost from 'react-native-simple-toast'
import { setUser } from '../../Redux/reducer/User.js'

import Toast from 'react-native-simple-toast';
import AuthService from '../../Services/Auth.js'

const SignIn = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [PasswordVisable, setPasswordVisable] = useState(true)
    const [SubmitStatus, setSubmitStatus] = useState(false)



    const validateForm = (status = false) => {

        if (status == false && SubmitStatus == false) return {}

        let errors = {};



        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.password.trim()) {
            errors.password = 'Please enter your password';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        } else if (!/\d/.test(formData.password)) {
            errors.password = 'Password must contain at least one numeric character';
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(formData.password)) {
            errors.password = 'Password must contain at least one special character';
        }

        return errors
        // setFormErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if no errors
    };

    const handleSignIn = () => {
        setSubmitStatus(true)
        const isFormValid = Object.keys(validateForm(true)).length === 0;
        if (isFormValid) {
            if (formData.email != 'demo@yopmail.com') {
                Simpletost.show("Email Not Registered! 🚫 Oops! It seems like this email is not associated with any account. Please double-check or sign up to join us!", 3)
                return
            }
            if (formData.password != "demo@124") {
                Simpletost.show("Password Mismatch! 🔐 Uh-oh! It looks like the passwords entered do not match. Please try again.", 3)
                return
            }
            Simpletost.show("Login Successful! 🎊 Welcome back! Enjoy your experience.", 3)
            let demoUserDAta = {
                email: "demo@yopmail.com",
                name: "Demo User",
                id: "0001"
            }
            dispatch(setUser(demoUserDAta))
            AuthService.setAccount(demoUserDAta)
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

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
                error={validateForm().email}
                onChangeText={(text) => handleInputChange('email', text)}
            />


            <AppTextInput
                leftIcon={<Ionicon name="key" size={23} />}
                rightAction={<Ionicon name={PasswordVisable ? "eye-off" : "eye"} size={23} />}
                onRightIconPress={() => setPasswordVisable(s => !s)}
                textContentType='password'
                title="Password"
                placeholder="Enter Password"
                secureTextEntry={PasswordVisable}
                error={validateForm().password}
                onChangeText={(text) => handleInputChange('password', text)}
            />
            <Text style={styles.forgotPassword}>Forgot Password ?</Text>
            <Pressable
                onPress={handleSignIn}
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
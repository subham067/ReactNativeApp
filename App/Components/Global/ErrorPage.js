// ErrorPage.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FONTS } from '../../Constants/Fonts';



const ErrorPage = ({ message = "", subMessage = "",image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.errorImage}
        source={image}
      />
      <Text style={styles.errorMessage}>{message}</Text>
      <Text style={styles.SuberrorMessage}>{subMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorImage: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    errorMessage: {
      fontSize: 20,
      textAlign: 'center',
      color: '#444',
      fontFamily:FONTS.bold
    },
    SuberrorMessage: {
      fontSize: 18,
      textAlign: 'center',
      color: '#333',
      fontFamily:FONTS.medium,
      paddingHorizontal:25,
      marginTop:20
    },
  });

export default ErrorPage;

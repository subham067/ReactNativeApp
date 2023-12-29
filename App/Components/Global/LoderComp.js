import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constants/Colors'

const LoderComp = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }}>
      <ActivityIndicator
          size={'large'}
          color={COLORS.primaryThemeColor}
        />
    </View>
  )
}

export default LoderComp

const styles = StyleSheet.create({})
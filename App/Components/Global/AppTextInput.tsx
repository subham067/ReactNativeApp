import React, { FC, ReactElement } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextStyle, ViewStyle, TextInputProps, StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';


interface AppTextInputProps extends TextInputProps {
  inputStyle?: TextStyle | ViewStyle;
  style?: TextStyle | ViewStyle;
  mainContainerStyle?: ViewStyle;
  leftIcon?: ReactElement;
  placeholderTextColor?: string;
  rightAction?: ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  rightActionButtonStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  onRightIconPress?: () => void;
  title?: string;
  allowFontScaling?: boolean;
  titleStyle?: TextStyle;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: boolean | string
}

const AppTextInput: FC<AppTextInputProps> = ({
  inputStyle,
  mainContainerStyle,
  leftIcon,
  placeholderTextColor = '#999',
  rightAction,
  rightActionButtonStyle,
  inputContainerStyle,
  onRightIconPress,
  title,
  allowFontScaling = false,
  titleStyle = {},
  value,
  onChangeText,
  style,
  error = false,
  ...props
}) => {
  return (
    <>


      <View style={[styles.container, mainContainerStyle]}>
        {title && (
          <Text style={[styles.titleStyle, titleStyle]} allowFontScaling={allowFontScaling}>
            {title}
          </Text>
        )}
        <View
          style={[
            styles.inputContainerStyle,
            { backgroundColor: COLORS.secondaryThemeColor,
              borderColor: error ? "red" : COLORS.primaryFontColor,
              borderWidth: 1, },
            inputContainerStyle,
          ]}
        >
          {leftIcon && (
            <View style={{ marginHorizontal: 10, ...leftIcon.props.style }}>{leftIcon}</View>
          )}
          <TextInput
            style={[
              styles.textInput,
              inputStyle,
              style,
            ]}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeText}
            {...props}
          />
          {rightAction && (
            <TouchableOpacity
              style={[styles.rightActionButton, rightActionButtonStyle]}
              onPress={onRightIconPress}
            >
              {rightAction}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text
        style={{
          color: "red",
          fontSize: moderateScale(13),
          fontFamily: FONTS.medium,
          marginHorizontal: moderateScale(15),
          paddingLeft: moderateScale(10)
        }}>
        {error}
      </Text>}
    </>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    // Add your styles for the container
    marginHorizontal: moderateScale(15),
                    marginTop: moderateScale(15),
  },
  textInput: {
    minHeight: 50,
    paddingHorizontal: 5,
    flex: 1,
    color: "#a8aabe",
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
    paddingLeft: moderateScale(10)
  },
  inputContainerStyle: {
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightActionButton: {
    marginHorizontal: 10,
  },
  titleStyle: {
    textTransform: 'capitalize',
    color: COLORS.primaryFontColor,
    fontSize: moderateScale(15),
    fontFamily: FONTS.semibold,
    marginBottom: 0,
  },
});

export default AppTextInput;

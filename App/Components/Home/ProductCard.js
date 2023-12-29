import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

const ProductCard = ({ item }) => {
  return (
    <View style={styles.productCardContainer}>
      <Image
        source={{ uri: item.image }}
        resizeMode='contain'
        style={styles.productImage}
      />
      <View style={styles.productDetailsContainer}>
        <Text numberOfLines={1} style={styles.productTitle}>
          {item.title}
        </Text>

        <Text numberOfLines={3} style={styles.productDescription}>
          {item.description}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price:</Text>

          <Text style={styles.priceValue}> ₹{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCardContainer: {
    backgroundColor: COLORS.secondaryThemeColor,
    padding: moderateScale(10),
    borderRadius: 15,
    elevation: 5,
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(15),
    flexDirection: 'row',
  },
  productImage: {
    height: moderateScale(100),
    width: moderateScale(70),
  },
  productDetailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  productTitle: {
    color: COLORS.primaryFontColor,
    fontFamily: FONTS.bold,
    fontSize: moderateScale(16),
  },
  productDescription: {
    color: COLORS.primaryFontColor,
    fontFamily: FONTS.regular,
    fontSize: moderateScale(14),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    color: COLORS.primaryFontColor,
    fontFamily: FONTS.regular,
    fontSize: moderateScale(15),
  },
  priceValue: {
    color: COLORS.primaryThemeColor,
    fontFamily: FONTS.bold,
    fontSize: moderateScale(15),
  },
});

export default ProductCard;

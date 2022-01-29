import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={{
            flexDirection:'row',
            alignItems:'center',
            padding: 10,
            marginTop:10,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.gray2,
            ...containerStyle
        }}>

            {/* image */}
            <Image
                source={categoryItem.image}
                resizeMode='cover'
                style={{
                    width:100,
                    height:100,
                    borderRadius:SIZES.radius
                }}
            />

            {/* Details */}
            <View 
            style={{
                width:'65%',
                paddingHorizontal: 20
            }}>
                {/* Name */}
            <Text style={{
                flex:1, ...FONTS.h2
            }}>{categoryItem.name}</Text>
                {/* Serving */}
                <Text style={{color:COLORS.gray, ...FONTS.body4 }}>
                    {categoryItem.duration} | {categoryItem.serving} Serving
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({});

import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { BlurView } from 'expo-blur';


const RecipeCardDetails =({ item })=>{
    return(
        <View
            style={{flex: 1

            }}>
                {/* Name */}
                <View
                    style={{
                        flex: 1,
                        flexDirection:'row',
                        justifyContent:'space-between',

                    }}>
                        <Text
                            style={{
                                width: '70%',
                                color: COLORS.white,
                                ...FONTS.h3,
                                fontSize: 18
                            }}
                        >
                            {item.name}
                        </Text>

                        <Image 
                            source={item.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                            style={{
                                width:20,
                                height:20,
                                marginRight: SIZES.base,
                                tintColor: COLORS.darkGreen
                            }}
                        />
                </View>
                <Text style={{
                    color:COLORS.lightGray,
                    ...FONTS.body4
                }}>
                    {item.duration} | {item.serving} Serving
                </Text>
        </View>
    )
}


const RecipeCardInfo=({ item })=>{
    if(Platform.OS === 'ios'){ //blur view only work with ios
    return(
        <BlurView
            blurType='dark'
            style={styles.recipeCardContainer}
        >
            <RecipeCardDetails item={item}/>
        </BlurView>
    )}
    else{
        return(
            <View style={{...styles.recipeCardContainer, backgroundColor: COLORS.transparentDarkGray}}>
                <RecipeCardDetails item={item}/>

            </View>
        )
    }
}




const TrendingCard = ({ containerStyles, recipeItem, onPress }) => {
    return (
        <TouchableOpacity style={{
            height: 350,
            width: 250,
            marginTop:SIZES.radius,
            marginRight: 20,
            borderRadius:SIZES.radius,
            ...containerStyles
        }}
        onPress={onPress}
        
        >
            <Image
                source={recipeItem.image}
                resizeMode='cover'
                style={{width:250, height:350, borderRadius: SIZES.radius}}
            />
            {/* category */}

            <View style={{
                position: 'absolute',
                top:20,
                left: 15,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 5,
                backgroundColor: COLORS.transparentGray,
                borderRadius:SIZES.radius,
            }}>
                <Text style={{color:COLORS.white, ...FONTS.h4}}>{recipeItem.category}</Text>
            </View>

            <RecipeCardInfo
                item={recipeItem}
            />

        </TouchableOpacity>
    );
};

export default TrendingCard;

const styles = StyleSheet.create({
    recipeCardContainer:{
        position:'absolute',
        bottom:10,
        left:10,
        right:10,
        height:100,
        paddingVertical:SIZES.radius,
        paddingHorizontal:SIZES.base,
        borderRadius:SIZES.radius
    }
});

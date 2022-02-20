import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Animated,
    Image,
    TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants'
const HEADER_HEIGHT = 350;


const RecipeCreatorCardInfo=({ recipe })=>{
    return(
        <View
            style={{
                flex: 1,
                borderRadius : SIZES.radius,
                backgroundColor: COLORS.transparentBlack9
            }}>
                {/* Recipie Creator Detail */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {/* Photo */}
                    <View style={{
                        width: 40,
                        height: 20,
                        marginLeft: 20,

                    }}>
                        <Image 
                            style={{width: 40, height: 40, borderRadius: 20}}
                            source={recipe?.author?.profilePic} />
                    </View>
                {/* Label */}
                <View style={{flex: 1, marginHorizontal: 20}}>
                    <Text style={{
                        color: COLORS.lightGray2, ...FONTS.body4}}> Recipe By: </Text>
                    <Text style={{color: COLORS.white2, ...FONTS.h3}}>
                        {recipe?.author?.name}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent:'center',
                        marginRight: 20,
                        borderRadius: 5,
                        borderWidth:1,
                        borderColor: COLORS.lightGreen1
                    }}
                >
                    <Image
                        source={icons.rightArrow}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGreen1
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Recipe = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        let { recipe } = route.params;
        setSelectedRecipe(recipe);

    },[])


    function renderRecipeHeader(){
        return(
            <View 
                style={{
                    alignItems: 'center',
                    overflow:'hidden',
                    marginTop:-1000,
                    paddingTop: 1000
                }}
            >
                <Animated.Image 
                    source={selectedRecipe?.image}
                    resizeMode='contain'
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform:  [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange:[-HEADER_HEIGHT/2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },{
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange:[2, 1, 0.75]
                                })
                            }
                        ]
                    }}
                    />

                    <Animated.View
                        style={{
                            position:'absolute',
                            bottom:10,
                            left: 30, 
                            right:30,
                            height: 80,
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange:[0, 170, 250],
                                        outputRange:[0,0,100],
                                        extrapolate:'clamp'
                                    })
                                }
                            ]
                        }}
                    >
                        <RecipeCreatorCardInfo recipe={selectedRecipe} />
                    </Animated.View>
            </View>
        )
    }

    function renderHeaderBar(){
        return(
            <View
                style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    right:0,
                    flexDirection:'row',
                    alignItems:'flex-end',
                    justifyContent:'space-between',
                    paddingHorizontal:SIZES.padding,
                    paddingBottom:10
                }}
            >

                {/* Screen Overlay */}
                <Animated.View
                    style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        right:0,
                        bottom:0,
                        backgroundColor:COLORS.black,
                        
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT-100, HEADER_HEIGHT-70],
                            outputRange:[0,1]
                        }),
                        
                    }}
                />
                {/* HeaderTitle */}
                    <Animated.View 
                        style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        right:0,
                        bottom:0,
                        justifyContent:'flex-end',
                        alignItems:'center',
                        paddingBottom:10,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                            outputRange:[0,1]
                        }),
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange:[HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                                    outputRange:[50, 1],
                                    extrapolate:'clamp'
                                })
                            }
                        ]
                        
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.lightGray2,
                                ...FONTS.body4
                            }}
                        >Recipe By: </Text>
                        <Text
                            style={{
                                color: COLORS.white2, ...FONTS.h3, 
                            }}
                        >{selectedRecipe?.author?.name}</Text>
                    </Animated.View>

                {/* BackButton */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent:'center',
                        height:35,
                        width:35,
                        borderRadius:18,
                        borderWidth:1,
                        borderColor:COLORS.lightGray,
                        backgroundColor:COLORS.transparentBlack5
                    }}
                    onPress={()=> navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor:COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>

                {/* Bookmark */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent:'center',
                        height:35,
                        width:35,
                    }}
                    onPress={()=> navigation.goBack()}
                >
                    <Image
                        source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}

                        style={{
                            width: 30,
                            height: 30,
                            tintColor:COLORS.darkGreen
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >   
            <Animated.FlatList
            
                data={selectedRecipe?.ingredients}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                            {renderRecipeHeader()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY }}}
                ], {useNativeDriver: true})}

                renderItem={({item})=>{
                    return(
                        <View
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 30,
                                marginVertical: 5
                            }}>
                                {/* icon */}
                                <View
                                    style={{
                                        alignItems:'center',
                                        justifyContent:'center',
                                        height: 50,
                                        width: 50,
                                        borderRadius: 5,
                                        backgroundColor: COLORS.lightGray
                                    }}
                                >
                                    <Image source={item.icon} style={{height: 40, width: 40}} />
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        paddingHorizontal: 20,
                                        justifyContent:'center'
                                    }}
                                >   
                                    <Text 
                                        style={{
                                                ...FONTS.body3
                                            }}>{item.description}</Text>
                                </View>
                                
                                <View
                                    style={{
                                        alignItems: 'flex-end',
                                        justifyContent:'center'
                                    }}
                                >
                                        <Text 
                                            style={{
                                                ...FONTS.body3
                                            }}
                                        >
                                            {item.quantity}
                                        </Text>
                                </View>
                        </View>
                    )
                }}
            />
            {/* Header Nav btns */}
            {renderHeaderBar()}
        </View>
    )
}

export default Recipe;
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, dummyData, FONTS, images, SIZES } from '../constants';
import CategoryCard from '../components/CategoryCard';
import { render } from 'react-dom';
import TrendingCard from '../components/TrendingCard';

const Home = ({ navigation }) => {

    function renderHeader(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal:SIZES.padding,
                    alignItems:'center',
                    height:80
                }}
            >
                <View style={{ flex:1 }}>
                    <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>Hello People</Text>
                    <Text style={{
                        marginTop:3, color: COLORS.gray, ...FONTS.h2
                    }}>How about some food?</Text>
                </View>
                <Image
                    source={images.profile}
                    style={{width: 40, height: 40, borderRadius: 20}}
                />
            </View>
        )
    }

    function renderSearchBar(){
        return(
            <View style={{ flexDirection: 'row', 
                            height: 50, 
                            alignItems:'center', 
                            marginHorizontal: SIZES.padding, 
                            paddingHorizontal:SIZES.radius,
                            borderRadius: 10,
                            backgroundColor:COLORS.lightGray
                            }}>
                <Image source={images.search} 
                    style={{
                        width:20,
                        height:20,
                        tintColor: COLORS.gray
                    }}
                    
                    />
                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.h3
                    }}
                    placeholder='Search'
                    placeholderTextColor={COLORS.gray}
                    />
            </View>
        )
    }
    function renderSeeRecipes(){
        return(
            <View 
                style={{
                    flexDirection:'row',
                    marginTop: SIZES.padding,
                    marginHorizontal:SIZES.padding,
                    borderRadius:10,
                    backgroundColor:COLORS.lightGreen
                }}
            >
                {/* Image */}
                <View 
                    style={{
                        width: 100,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={images.recipe}
                        style={{
                            width:80, height:80
                        }}
                    />
                </View>
                    {/* Text */}
                <View style={{
                    flex: 1,
                    paddingVertical: SIZES.radius
                }}>
                    <Text 
                        style={{
                            width:'70%',
                            ...FONTS.body4
                        }}
                    >
                        You have 12 recipies that you have't tried yet
                    </Text>
                    <TouchableOpacity style={{marginTop: 10}}>
                        <Text style={{color:COLORS.darkGreen, textDecorationLine:'underline',...FONTS.h4}}>See recipes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderTrendingSection(){
        return(
            <View style={{
                marginTop:SIZES.padding
            }}>
                <Text
                    style={{
                        marginHorizontal:SIZES.padding,...FONTS.h2
                    }}
                >Trending Recipe</Text>
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator =  {false}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item,index})=>{
                        return(
                            <View>
                                <TrendingCard  
                                    containerStyles={{
                                        marginLeft: index == 0 ? SIZES.padding : 0
                                    }}
                                    recipeItem={item}
                                    onPress={()=>navigation.navigate('Recipe', {recipe: item})}
                                    />
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
    function renderCategoryHeader(){
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop: 20,
                marginHorizontal : SIZES.padding
            }}>
                <Text style={{
                    flex: 1, ...FONTS.h2
                }}>
                    Categories
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}> 
                        View all
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        {/* render-SearchBar */}
                        {renderSearchBar()}
                        {/* see recipies */}
                        {renderSeeRecipes()}
                        {/* trendingSection */}
                        {renderTrendingSection()}
                        {/* categoryHeader */}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item })=> <CategoryCard 
                                onPress={()=>navigation.navigate("Recipe", {recipe: item})}
                                containerStyle={{marginHorizontal: SIZES.padding}} 
                                categoryItem={item} />}
                ListFooterComponent={
                    <View style={{marginBottom: 100}}/>
                }
            />
        </SafeAreaView>
    )
}

export default Home;
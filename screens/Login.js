import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, FONTS, images, SIZES,  } from '../constants'
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {

    function renderHeader(){
        return(
            <View style={{
                height: SIZES.height > 700 ? "65%":"60%"
            }}>
                <ImageBackground 
                    source={images.loginBackground}
                    resizeMode='cover'
                    style={{ flex: 1, justifyContent:'flex-end'}}
                    >
                    <LinearGradient
                        start={{x:0, y:0}}
                        end={{x:0, y:1}}
                        colors={[COLORS.transparent, COLORS.black]}
                        style={{
                            height: 200,
                            justifyContent:'flex-end',
                            lineHeight:45,
                            paddingHorizontal:SIZES.padding    
                            ,
                        }}
                    >
                        <Text
                            style={{
                                width:'80%',
                                color:COLORS.white,
                                ...FONTS.largeTitle
                            }}
                        >
                            Cooking Delicious Food Easily
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }
    function renderDetail(){
        return (
            <View style={{flex:1, paddingHorizontal: SIZES.padding}}>
                {/* Description */}
                <Text style={{marginTop: SIZES.radius, width:'70%', color:COLORS.gray, ...FONTS.body3}}>
                    
                    Discover more than 1000 food recipes in your hands and cooking it easily</Text>
                {/* button */}
                <View style={{flex:1, backgroundColor: COLORS.black}}>
                    {/* login */}
                    <CustomButton  
                        btnText="Login" 
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={()=>navigation.replace('Home')}
                        btnContainerStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical:18, borderRadius: 20, 
                        }}
                        />
                    <CustomButton  
                        btnText="SignUp" 
                        // colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={()=>navigation.replace('Home')}
                        btnContainerStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical:18, borderRadius: 20
                            ,borderWidth:1,
                            borderColor:COLORS.darkLime
                        }}
                        />
                </View>
            </View>
        )
    }
    return (
        <View style={{
            flex:1,
            backgroundColor: COLORS.black
        }}>


            <StatusBar barStyle='light-content' />
            {/* Header */}
            {renderHeader()}

            {/* Detail */}
            {renderDetail()}
        </View>
    )
}

export default Login;
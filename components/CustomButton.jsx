import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../constants';

const CustomButton = ({ btnText, btnContainerStyle, colors, onPress }) => {
    if(colors?.length>0){
        return(
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                    colors={colors}
                    style={{...btnContainerStyle}}
                >
                    <Text style={{textAlign:'center', color:COLORS.white, ...FONTS.h2}}>
                        {btnText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )}
    else{
        return(
            <TouchableOpacity style={{...btnContainerStyle}} onPress={onPress}>
                <Text style={{textAlign:'center', color:COLORS.lightGreen, ...FONTS.h2}}>
                    {btnText}
                </Text>
            </TouchableOpacity>
            )
    }
};

export default CustomButton;

const styles = StyleSheet.create({});

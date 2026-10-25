import {View, Text, Linking} from 'react-native';
import React from 'react';
import {Link} from "expo-router";
const SignUp =()=>{
    return (
        <View>
            <Text>Sign up page </Text>
            <Link href ="/(auth)/sign-up"> Sign In </Link>
        </View>
    )
}
export default SignUp;
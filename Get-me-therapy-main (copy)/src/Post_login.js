import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Arrow from 'react-native-arrow';
import {MinusIcon} from 'react-native-heroicons/solid';
const Post_login = ({navigation}) => {
  return (
    <View View className="flex justify-center">
      <ImageBackground
        source={require('../assets/img3.png')}
        resizeMode="cover"
        className="h-screen w-screen flex blur-xl">
        <View className=" flex flex-col items-center bg-white h-[60%] w-screen absolute bottom-0 rounded-t-3xl">
        <TouchableOpacity className="bg-black/10 rounded-md w-12 h-1 mt-2"
        onPress={() => {
            navigation.navigate('Reset');
        }}></TouchableOpacity>
          <ImageBackground
            source={require('../assets/success.png')}
            resizeMode="cover"
            className="h-64 w-64 flex"></ImageBackground>
          <View className="gap-2"> 
            <Text className="font-inter text-2xl font-semibold text-black text-center">Login Successful</Text>
            <Text className="font-inter text-sm font-medium text-text2 ml-8 mr-8 pl-6 pr-2 text-center">
              An event has been created and the invite has been sent to you on mail.
            </Text>
          </View>

          <View className="w-[75%] mt-12">
          <TouchableOpacity
        className="bg-primary rounded-md py-4 rounded-r-3xl rounded-l-3xl"
        onPress={()=>{
            navigation.navigate('Login');
          }}>
            <Text className="text-sm text-center  text-white font-Regular">Logout</Text>
        </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Post_login

const styles = StyleSheet.create({})
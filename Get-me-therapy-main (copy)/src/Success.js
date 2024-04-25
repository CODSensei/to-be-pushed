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
  
  const Success = ({navigation}) => {
    return (
      <View View className="flex justify-center">
        <ImageBackground
          source={require('../assets/reset.jpg')}
          resizeMode="cover"
          className="h-screen w-screen flex blur-xl"
          blurRadius={3.5}>
          <View className=" flex flex-col items-center bg-white h-[60%] w-screen absolute bottom-0 rounded-t-3xl">
          <TouchableOpacity className="bg-black/10 rounded-md w-12 h-1 mt-2"
          onPress={() => {
              navigation.navigate('Reset');
          }}></TouchableOpacity>
            <ImageBackground
              source={require('../assets/success.png')}
              resizeMode="cover"
              className="h-64 w-64 flex"></ImageBackground>
            <View className="gap-6"> 
              <Text className="font-inter text-2xl font-semibold text-black text-center">Password Changed</Text>
              <Text className="font-inter text-sm font-medium text-text2 ml-8 mr-8 text-center">
                Password changed successfully, you can login again with a new
                password
              </Text>
            </View>
  
            <View className="w-[75%] mt-12">
            <TouchableOpacity
          className="bg-primary rounded-md py-4 rounded-r-3xl rounded-l-3xl"
          onPress={()=>{
              navigation.navigate('Login');
            }}>
              <Text className="text-sm text-center  text-white font-Regular">Go to Login</Text>
          </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Success;
  
  const styles = StyleSheet.create({});
  
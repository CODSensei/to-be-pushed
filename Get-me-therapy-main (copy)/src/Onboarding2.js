import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Arrow from 'react-native-arrow';

const Onboarding2 = ({navigation}) => {
  return (
    <View className="flex justify-center ">
      <ImageBackground
        source={require('../assets/img2.png')}
        resizeMode="cover"
        className="h-screen w-screen flex flex-1 flex-col ">
        <View
          className="h-80 w-64 bg-primary flex flex-col
      justify-between absolute top-96 right-14 rounded-3xl">
          <Text className="font-serif text-center text-3xl text-white mt-3 ">
            We serve incomparable delicacies
          </Text>
          <Text className=" text-clip text-sm font-Regular font-medium text-white text-center">
            All the best restaurants with their top menu waiting for you, they
            cant’t wait for your order!!
          </Text>
          <View className="flex flex-row justify-center ">
            <TouchableOpacity className="h-2 w-8 bg-gray-300 mx-1 rounded-md"></TouchableOpacity>
            <TouchableOpacity className="h-2 w-8 bg-white mx-1 rounded-md"></TouchableOpacity>
            <TouchableOpacity className="h-2 w-8 bg-gray-300 mx-1 rounded-md"></TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between">
            <TouchableOpacity className="mx-4 my-4 text-white" onPress={()=>{
              navigation.navigate('Login');}}>
              <Text className="text-white text-base">SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mx-4 my-3" onPress={()=>{
                navigation.navigate('Onboarding3')
            }}>
              <Text className="text-white text-base">
                NEXT
                <Arrow color={'white'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({});

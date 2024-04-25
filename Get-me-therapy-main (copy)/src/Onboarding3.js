import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Arrow from 'react-native-arrow';

const Onboarding3 = ({navigation}) => {
  return (
    <View className="flex justify-center ">
      <ImageBackground
        source={require('../assets/img1.png')}
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
         
          
          <View className='flex justify-center items-center self-center h-28 w-28 rounded-full bg-primary border-2 border-white border-l-2-gray-200'>

          <TouchableOpacity className="flex justify-center items-center h-24 w-24 bg-white rounded-full self-center   " onPress={()=>{
            navigation.navigate('Login');
          }}>
           <Arrow size={20} color={'#FE8C00'} className="" />
           
          </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding3;

const styles = StyleSheet.create({});

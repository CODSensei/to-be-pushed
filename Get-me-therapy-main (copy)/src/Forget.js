
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const Forget = ({navigation}) => {
  const [email, setemail] = useState('');

  return (
    <ScrollView>
      <View className="flex flex-col justify-around px-8 flex-1">
        <View>
        <Text
          className="text-4xl text-left font-bold font-inter text-black
           m-1  mt-14 ">
          Forgot password?
        </Text>
        <Text
          className="text-base text-left font-Bold text-slate-500
           m-1  mt-2 ">
          Enter your email address and we'll send you confirmation code to reset
          your password
        </Text>
      </View>
      <View className="my-12">
        <Text className="text-black text-base">Email Address</Text>
        <TextInput
          className="border-2 px-4 py-4  rounded-lg  my-2 mb-32 border-[#c4c5c7] font-Regular text-base "
          placeholder="Enter your Email "
          onChangeText={setemail}
          value={email}
        />
        <TouchableOpacity
            className="bg-primary  rounded-md py-5 rounded-r-3xl rounded-l-3xl"
            onPress={() => {
                navigation.navigate('Otp');
              }}>
            <Text className="text-sm text-center  text-white font-Regular">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Forget;

const styles = StyleSheet.create({});
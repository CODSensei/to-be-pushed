import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import {ChevronLeftIcon} from 'react-native-heroicons/outline';
  
  const Reset = ({navigation}) => {
      const [resetPassword, setresetPassword] = useState('');
      const [confirmPassword, setconfirmPassword] = useState('');
    return (
      <ScrollView className="flex flex-1 flex-col ">
        <View
          className="flex flex-row my-12 ml-6 pt-3 pr-0 pb-3 pl-0 items-center">
          <TouchableOpacity
            className="border p-2"
            style={styles.roundButton1}
            onPress={() => {
              navigation.navigate('Otp');
            }}>
            <ChevronLeftIcon color={'black'} />
          </TouchableOpacity>
          <View className="flex content-center pl-11 ml-10">
            <Text className="font-inter text-base font-semibold text-black ">
              Reset Password
            </Text>
          </View>
        </View>
        <View className="gap-2 ml-8">
          <Text className="font-inter text-3xl font-semibold text-text">Reset Password</Text>
          <Text className="font-inter text-sm font-medium text-text2">Your new password must be different from the previously used password</Text>
        </View>
  
        <View className="ml-8 mt-10">
          <Text className="font-inter font-medium text-sm text-text">New Password</Text>
          <TextInput
              className="border-2 px-4 py-2 rounded-lg  my-2 mr-10  border-[#D6D6D6] font-Regular text-base "
              placeholder="New Password"
              onChangeText={setresetPassword}
              value={resetPassword}
              autoCapitalize='false'
              autoCorrect={false}
              secureTextEntry={true}
              textContentType='password'
            />
          <Text className="font-inter font-medium text-sm text-text2">Must be at least 8 character</Text>
        </View>
        <View className="ml-8 mt-10">
          <Text className="font-inter font-medium text-sm text-text">Confirm Password</Text>
          <TextInput
              className="border-2 px-4 py-2 rounded-lg  my-2 mr-10  border-[#D6D6D6] font-Regular text-base "
              placeholder="Confirm Password"
              onChangeText={setconfirmPassword}
              value={confirmPassword}
              autoCapitalize='false'
              autoCorrect={false}
              secureTextEntry={true}
              textContentType='password'
            />
          <Text className="font-inter font-medium text-sm text-text2">Both password must match</Text>
        </View> 
  
        <View className="ml-8 mt-48 mr-8">
          <TouchableOpacity
          className="bg-primary rounded-md py-5 rounded-r-3xl rounded-l-3xl"
          onPress={()=>{
              navigation.navigate('Success');
            }}>
              <Text className="text-sm text-center  text-white font-Regular">Verify Account</Text>
          </TouchableOpacity>
        </View>
  
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundButton1: {
      width: 36,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 1,
      borderRadius: 100,
      backgroundColor: 'secondary',
      border: 1,
    },
    input: {
      width: 40,
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      margin: 5,
      textAlign: 'center',
    },
  });
  export default Reset;
  
  // const styles = StyleSheet.create({})
  
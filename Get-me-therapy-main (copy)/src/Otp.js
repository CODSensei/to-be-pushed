import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-animatable';
import {ClockIcon} from 'react-native-heroicons/outline';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');
  // Function to handle OTP input
  const handleOtpInputChange = (value, index) => {
    // Modify OTP state at the specified index
    let newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));

    // Move to the next input field automatically (if exists)
    if (index < 4 && value !== '') {
      TextInputRefs[index + 1].focus();
    }
    if (index>0 && value == ''){
      TextInputRefs[index-1].focus();
    }
  };

  // Function to handle OTP verification
 // Array to store references to TextInput components
  const TextInputRefs = [];

  return (
    <ScrollView className="flex flex-col flex-1">
      <View
        className="flex flex-row my-12 ml-6 pt-3 pr-0 pb-3 pl-0 items-center">
        <TouchableOpacity
          className="border p-2"
          style={styles.roundButton1}
          onPress={() => {
            navigation.navigate('Forget');
          }}>
          <ChevronLeftIcon color={'black'} />
        </TouchableOpacity>
        <View className="flex content-center pl-11 ml-20 pr-2">
          <Text className="font-inter text-base font-semibold pr-5 text-black">
            OTP
          </Text>
        </View>
      </View>

      <View className="gap-2 ml-8">
        <Text className="font-inter text-3xl font-semibold text-text">Email verification</Text>
        <Text className="font-inter text-sm font-medium text-text2">Enter the verification code we send you on: Alberts******@gmail.com|</Text>
      </View>

      <View 
      className="ml-5 mr-5 mt-10"
      style={styles.container}>
        {/* Render OTP input fields */}
        {[...Array(4)].map((_, index) => (
          <TextInput
          className="font-inter text-3xl "
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleOtpInputChange(value, index)}
            ref={ref => TextInputRefs.push(ref)}
          />
        ))}
      </View>
      {/* Button to verify OTP */}
      <View className="flex flex-row ml-8 mr-8 justify-center">
        <Text className="text-[#878787] font-inter font-medium text-sm">Didn't receive code?</Text>
        <TouchableOpacity>
          <Text className="text-primary font-regular font-medium text-sm">Resend</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row justify-center mt-24 pb-4">
        <ClockIcon color={'grey'} />
        <Text className="ml-1">09.00</Text>
      </View>
      
      <View className="ml-8  mr-8">
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Reset');
        }}
        className="bg-primary rounded-md py-5 rounded-r-3xl rounded-l-3xl">
            <Text className="text-sm text-center  text-white font-Regular">Continue</Text>
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
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 12,
    margin : 6,
    marginRight: 5,
    textAlign: 'center',
    borderColor:'#EAEAEA',
    },
});

export default Otp;
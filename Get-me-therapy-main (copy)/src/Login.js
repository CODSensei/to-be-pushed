import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useContext, useEffect, useState} from 'react';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import ApiCalendar from 'react-google-calendar-api';
import { getAdditionalUserInfo } from 'firebase/auth';



const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [toggle, settoggle] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);


  useEffect(() => {
    GoogleSignin.configure({
      clientId: '323556919212-ic2sufgral9tii02qvbeoc9spob0iag3.apps.googleusercontent.com',
      apiKey: 'AIzaSyAA4hC3XfHYaa7hEWr7nQRDLEUSwMH1TmU',
      scope: 'https://www.googleapis.com/auth/calendar',
      discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
      ],
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setIsSignedIn(true);
      console.log(userInfo.user.email);
      if (userInfo) {
        Alert.alert('Login Successfully');
        await AsyncStorage.setItem('userId', userInfo.user.id);
        // getAdditionalUserInfo();
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
       
        await AsyncStorage.setItem('userId', user.user.uid);
        navigation.navigate('Post_login');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <ScrollView>
      <View className="flex flex-col justify-around  px-8 flex-1">
        <View>
          <Text
            className="text-3xl text-left font-Bold text-black
           m-1  mt-10 ">
            Login to Your Account
          </Text>
          <Text
            className="text-base text-left font-Bold text-slate-500
           m-1  mt-2 ">
            Please Sign in to your account
          </Text>
        </View>

        <View className="my-10">
          <Text className="text-black text-lg">Email Address</Text>
          <TextInput
            className="border-2 px-4 py-2  rounded-lg  my-2 mb-8  border-[#c4c5c7] font-Regular text-xs "
            placeholder="Enter your Email "
            onChangeText={setemail}
            value={email}
          />
          <Text className="text-black text-lg">Password</Text>
          <View className="flex flex-row justify-between items-center border-2 px-4 rounded-lg my-2  border-[#c4c5c7] font-Regular text-xs">
            <TextInput
              className="flex-1 "
              placeholder="Enter your password "
              onChangeText={setpassword}
              value={password}
              autoCorrect={false}
              secureTextEntry={toggle}
              textContentType="password"
            />
            <TouchableOpacity
              onPress={() => {
                settoggle(!toggle);
              }}>
              {toggle ? (
                <EyeSlashIcon color={'black'} size={15} />
              ) : (
                <EyeIcon color={'black'} size={15} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            className="text-right font-Bold text-primary my-4 text-xs"
            onPress={() => {
              navigation.navigate('Forget');
            }}>
            Forgot Password ?
          </Text>
          <TouchableOpacity
            className="bg-primary  rounded-md py-3"
            onPress={login}>
            <Text className="text-sm text-center  text-white font-Regular">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-center text-sm py-10">
            ------ or continue with ------
          </Text>

          <TouchableOpacity
            className="border rounded flex-row  justify-center space-x-4 items-center py-1"
            onPress={signIn}>
            <Image
              source={require('../assets/google_logo.png')}
              className=" w-8 h-8"
            />
            <Text className="text-center py-2 text-sm font-Regular">
              Login up with Google
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row py-2 justify-center space-x-2 mt-5">
            <Text className="text-center  font-Regular">
              Don't have an account?
            </Text>

            <Text
              className="font-Regular text-primary"
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Register
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Login;

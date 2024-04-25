import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
// import {CheckBox} from 'react-native-elements';
import React, {useEffect, useState} from 'react';
import {CheckBox, Icon} from '@rneui/themed';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {Checkbox} from 'native-base';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Register = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [user, setuser] = useState('');
  const [toggle, settoggle] = useState(true);
  const [agree, setagree] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '323556919212-ic2sufgral9tii02qvbeoc9spob0iag3.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        Alert.alert('Account Created ! Please Login');
        navigation.navigate('Login');
        await AsyncStorage.setItem('userId', userInfo.user.id);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const register = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Account Created ! Please Login');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <ScrollView>
      <View className="flex flex-col justify-around  px-8 flex-1">
        <View>
          <Text
            className="text-3xl text-left font-bold font-inter text-black
           m-1  mt-5 ">
            Create Your new Account
          </Text>
          <Text
            className="text-lg text-left font-Bold text-slate-500
           m-1  mt-2 ">
            Create an account to start looking for the food you like
          </Text>
        </View>

        <View className="my-2">
          <Text className="text-black text-base">Email Address</Text>
          <TextInput
            className="border-2 px-4   rounded-lg  my-1 mb-5  border-[#c4c5c7] font-Regular text-xs "
            placeholder="Enter your Email "
            onChangeText={setemail}
            value={email}
          />
          <Text className="text-black text-lg">User Name</Text>
          <TextInput
            className="border-2 px-4 py-2  rounded-lg my-2 mb-5  border-[#c4c5c7] font-Regular text-xs"
            placeholder="Enter your User Name "
            onChangeText={setuser}
            value={user}
          />
          <Text className="text-black text-lg">Password</Text>
          <View className="flex flex-row justify-between items-center border-2 px-4   rounded-lg my-2  border-[#c4c5c7] font-Regular text-xs">
            <TextInput
              className="flex-1"
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
        </View>

        <View>
          <Checkbox
            shadow={2}
            value="test"
            onPress={() => {
              setagree(!agree);
            }}>
            I accept the terms & conditions
          </Checkbox>
          {agree ? (
            <TouchableOpacity
              className="bg-primary  rounded-md py-3 mt-4"
              onPress={register}>
              <Text className="text-sm text-center  text-white font-Regular">
                Register
              </Text>
            </TouchableOpacity>
          ) : (
            <View className="bg-primary  rounded-md py-3 mt-4">
              <Text className="text-sm text-center  text-white font-Regular">
                Register
              </Text>
            </View>
          )}
        </View>
      </View>

      <View>
        <Text className="text-center text-sm py-10">
          ------ or continue with ------
        </Text>

        <TouchableOpacity
          className="rounded flex-row self-center  border w-56 justify-center space-x-4 items-center py-1"
          onPress={signIn}>
          <Image
            source={require('../assets/google_logo.png')}
            className=" w-8 h-8"
          />
          <Text className="text-center py-2 text-sm font-Regular">
            Sign up with Google
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row py-2 justify-center space-x-2 ">
          <Text className="text-center  font-Regular">
            Don't have an account?
          </Text>

          <Text
            className="font-Regular text-primary"
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create();

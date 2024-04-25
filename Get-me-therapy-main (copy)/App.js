import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding1 from './src/Onboarding1';
import Onboarding2 from './src/Onboarding2';
import Onboarding3 from './src/Onboarding3';
import Login from './src/Login';
import Register from './src/Register';
import Forget from './src/Forget';
import Otp from './src/Otp';
import {NativeBaseProvider} from 'native-base';
import Reset from './src/Reset';
import Success from './src/Success';
import Post_login from './src/Post_login';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Reset" component={Reset} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="Post_login" component={Post_login} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

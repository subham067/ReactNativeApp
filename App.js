import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './App/Redux/reducer/User';
import AuthService from './App/Services/Auth';
import AppStack from './App/Navigation/AppStack';
import NavigationService from './App/Services/Navigation';
import AuthStack from './App/Navigation/AuthStack';

import BootSplash from "react-native-bootsplash";

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const { loginStatus } = useSelector(state => state.User);

  useEffect(() => {
    ckhUser();
  }, []);

  const ckhUser = () => {
    AuthService.getAccount()
      .then(result => {
        if (result) {
          dispatch(setUser(result));
        }
          BootSplash.hide({ fade: true });
       
      })
      .catch(err => {
        console.log('err>>>', err);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <StatusBar
        translucent={false}
        backgroundColor={'#FFFFFF'}
        barStyle='dark-content'
      />

     
         
            <NavigationContainer
              ref={r => NavigationService.setTopLevelNavigator(r)}
            >
              <Stack.Navigator
                initialRouteName="AuthStack"
                screenOptions={{
                  headerShown: false
                }}
              >
                {
                  !loginStatus ?
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                    :
                    <Stack.Screen name="AppStack" component={AppStack} />
                }
              </Stack.Navigator>
            </NavigationContainer>
         
      

    </View>
  );
};

export default App;

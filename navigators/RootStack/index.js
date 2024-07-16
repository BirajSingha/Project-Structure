import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthStack from '../AuthStack';
import MyStack from '../MyStack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const AuthReducer = useSelector(state => state?.AuthReducer);

  if (AuthReducer?.isLoading || AuthReducer?.token === null) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

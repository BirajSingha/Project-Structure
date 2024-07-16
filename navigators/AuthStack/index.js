import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../../screens/AuthScreens/Signup';
import Signin from '../../screens/AuthScreens/Signin';
import Splash from '../../screens/AuthScreens/Splash';
import ForgotPassword from '../../screens/AuthScreens/ForgotPassword';
import VerifyOTP from '../../screens/AuthScreens/VerifyOTP';
import ResetPassword from '../../screens/AuthScreens/ResetPassword';
import BottomTab from '../BottomTab';
import SearchResults from '../../screens/StackScreens/SearchResults';
import CarDetails from '../../screens/StackScreens/CarDetails';
import ConfirmBooking from '../../screens/StackScreens/ConfirmBooking';
import TnC from '../../screens/AuthScreens/TnC';
import Payment from '../../screens/StackScreens/Payment';
import TripBooked from '../../screens/StackScreens/TripBooked';
import TripDetails from '../../screens/StackScreens/TripDetails';
import ExtendTrip from '../../screens/StackScreens/ExtendTrip';
import RentalAgreement from '../../screens/StackScreens/RentalAgreement';
import UploadCarImages from '../../screens/StackScreens/UploadCarImages';
import MyCards from '../../screens/StackScreens/MyCards';
import Support from '../../screens/StackScreens/Support';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTP}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        animation="slide_from_right"
      />
      <Stack.Screen name="TnC" component={TnC} animation="slide_from_right" />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="CarDetails"
        component={CarDetails}
        animation="slide_from_right"
      />
      {/* 👇 REMOVE AFTER API IMPLEMENTATION */}
      <Stack.Screen
        name="ConfirmBooking"
        component={ConfirmBooking}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="TripBooked"
        component={TripBooked}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetails}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="ExtendTrip"
        component={ExtendTrip}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="RentalAgreement"
        component={RentalAgreement}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="UploadCarImages"
        component={UploadCarImages}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="MyCards"
        component={MyCards}
        animation="slide_from_right"
      />
      <Stack.Screen
        name="Support"
        component={Support}
        animation="slide_from_right"
      />
      {/* 👆 REMOVE AFTER API IMPLEMENTATION */}
    </Stack.Navigator>
  );
};

export default AuthStack;

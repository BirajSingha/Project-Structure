import {StatusBar, Text, TextInput} from 'react-native';
import React from 'react';
import RootStack from './src/navigators/RootStack';
import Store from './src/redux/Store';
import {Provider} from 'react-redux';

// Disable font scaling globally for all Text components
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

//Disable font scaling globally for all TextInput components
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <RootStack />
    </Provider>
  );
};

export default App;

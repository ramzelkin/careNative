import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {navigationRef} from './src/navigation/Coordinator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

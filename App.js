import React from 'react';
import {Text} from 'react-native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import MainNavigator from './src/navigation/mainNavigator';
import {store} from './src/reducers/store';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = true;

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <MainNavigator />
    </Provider>
  );
};

export default App;

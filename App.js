import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import CartReducer from './Store/reducer/cart';

const HomeStack = createStackNavigator();

const rootReducer = combineReducers({
  cart: CartReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

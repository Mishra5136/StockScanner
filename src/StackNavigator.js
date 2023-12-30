// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StockGraph from './components/StockGraph'; // Update the import

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Stock Scanner' }}
    />
    <Stack.Screen name="StockGraph" component={StockGraph} />
    {/* Add more screens for other pages */}
  </Stack.Navigator>
);

export default StackNavigator;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import MovieDetail from './screens/MovieDetail';
const Stack = createStackNavigator();
function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="MovieDetail"
          options={{headerShown: false}}
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default index;

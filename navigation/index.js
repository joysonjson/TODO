/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddToDo from '../screens/addToDo';
import ToDoList from '../screens/toDoList';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ADD" component={AddToDo} />
        <Stack.Screen name="TODOES" component={ToDoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import {
  Button,
  StyleSheet, Text, View,
} from "react-native";
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ScreenA"
          component={ScreenA}
        />
        <Stack.Screen 
          name="ScreenB"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const ScreenA = ({navigation}) => {
  return (
    <View>
      <Text>Screen A</Text>
      <Button title="Go to Screen B" onPress={() => navigation.navigate("ScreenB")} />
    </View>
  )
}

const ScreenB = ({navigation}) => {
  return (
    <View>
      <Text>Screen A</Text>
      <Button title="Go to Screen A" onPress={() => navigation.navigate("ScreenA")} />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

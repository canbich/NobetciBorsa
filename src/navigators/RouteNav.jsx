import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IsmailScreen from "../screens/IsmailScreen";
import RootNavigator from './RootNavigator';

const RouteNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="root" component={RootNavigator} />
      <Stack.Screen name="ismail" component={IsmailScreen} />

    </Stack.Navigator>
  );
};

export default RouteNav;

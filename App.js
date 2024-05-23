import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Fermate from "./components/Stop";
import StopDetail from "./components/StopDetail";
import Search from "./components/Search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Fermate" component={Fermate} />
        <Stack.Screen name="StopDetail" component={StopDetail} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      style={{
        tabBarPosition: "bottom",
        tabBarTopOffset: 20,
      }}
    >
      <Tab.Screen
        name="Fermate"
        component={Fermate}
        options={{
          tabBarLabel: "Fermate",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStop"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Fermate from "./components/Stop";
import StopDetail from "./components/StopDetail";
//TODO: Fare la stack per la navigazione

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Fermate"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Fermate" component={Fermate} />
        <Stack.Screen name="StopDetail" component={StopDetail} />
      </Stack.Navigator>
    </NavigationContainer>
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

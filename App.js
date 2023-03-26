import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Screens/Login";
import ListScreen from "./src/Screens/ListScreen";
import Form from "./src/Screens/Form";
import Dashboard from "./src/Screens/Dashboard";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="Form" component={Form} />
        <stack.Screen name="Dashboard" component={Dashboard} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

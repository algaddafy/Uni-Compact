import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Screens/Login";
import ListScreen from "./src/Screens/ListScreen";
import Form from "./src/Screens/Form";
import Dashboard from "./src/Screens/Department/Dashboard";
import Add_faculty from "./src/Screens/Faculty/Add_faculty";
import Add_student from "./src/Screens/Student/Add_student";
import My_profile from "./src/Screens/Department/My_profile";
import Student_dashboard from "./src/Screens/Student/Student_dashboard";
import Faculty_dashboard from "./src/Screens/Faculty/Faculty_dashboard";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="Form" component={Form} />
        <stack.Screen name="Dashboard" component={Dashboard} />
        <stack.Screen name="Add_faculty" component={Add_faculty} />
        <stack.Screen name="Add_student" component={Add_student} />
        <stack.Screen name="My_profile" component={My_profile} />
        <stack.Screen name="Student_dashboard" component={Student_dashboard} />
        <stack.Screen name="Faculty_dashboard" component={Faculty_dashboard} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

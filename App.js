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
import Add_parent from "./src/Screens/Parent/Add_parent";
import Assign_student from "./src/Screens/Course/Assign_student";
import Assign_faculty from "./src/Screens/Course/Assign_faculty";
import Results from "./src/Screens/Results/Results";
import Advisor from "./src/Screens/Advisor/Advisor";
import Announcement from "./src/Screens/Announcement/Announcement";
import Add_announcement from "./src/Screens/Announcement/Add_announcement";
import Edit_announcement from "./src/Screens/Announcement/Edit_announcement";
import List_student from "./src/Screens/Student/List_student";
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
        <stack.Screen name="Add_parent" component={Add_parent} />
        <stack.Screen name="My_profile" component={My_profile} />
        <stack.Screen name="Student_dashboard" component={Student_dashboard} />
        <stack.Screen name="Faculty_dashboard" component={Faculty_dashboard} />
        <stack.Screen name="Assign_student" component={Assign_student} />
        <stack.Screen name="Assign_faculty" component={Assign_faculty} />
        <stack.Screen name="Results" component={Results} />
        <stack.Screen name="Advisor" component={Advisor} />
        <stack.Screen name="Announcement" component={Announcement} />
        <stack.Screen name="Add_announcement" component={Add_announcement} />
        <stack.Screen name="Edit_announcement" component={Edit_announcement} />
        <stack.Screen name="List_student" component={List_student} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

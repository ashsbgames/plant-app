import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Plants from "./Plants";
import Homepage from "./Homepage";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="My Plants" component={Plants} />
    </Tab.Navigator>

    )
}

export default BottomNavigation
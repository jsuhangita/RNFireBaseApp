import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../Pages/Auth/Login.page";

const Stack = createStackNavigator();

export function Auth() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown:false
                }}
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}
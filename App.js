import React from "react"
import { I18nManager } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./app/screens/HomeScreen"

I18nManager.forceRTL(true)


const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};


export default App;

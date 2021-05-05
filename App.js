import React from "react"
import { I18nManager } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./app/screens/HomeScreen"
import AddNoteScreen from "./app/screens/AddNoteScreen"
import { NoteProvider } from "./app/context/NoteContext"

I18nManager.forceRTL(true)


const Stack = createStackNavigator()

const App = () => {
    return (
        <NoteProvider>
            <NavigationContainer>

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Add" component={AddNoteScreen} />
                </Stack.Navigator>

            </NavigationContainer>
        </NoteProvider>
    );
};


export default App;

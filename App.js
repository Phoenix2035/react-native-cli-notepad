import React, { useEffect } from "react"
import { I18nManager } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import RNBootSplash from "react-native-bootsplash";


import { NoteProvider } from "./app/context/Context"
import HomeScreen from "./app/screens/HomeScreen"
import AddNoteScreen from "./app/screens/AddNoteScreen"
import UpdateNoteScreen from "./app/screens/UpdateNoteScreen"

I18nManager.forceRTL(true)


const Stack = createStackNavigator()

const App = () => {

    useEffect(() => {
        RNBootSplash.hide({ fade: true })
    }, [])
    return (
        <NoteProvider>
            <NavigationContainer>

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Add" component={AddNoteScreen} />
                    <Stack.Screen name="Update" component={UpdateNoteScreen} />
                </Stack.Navigator>

            </NavigationContainer>
        </NoteProvider>
    );
};


export default App;

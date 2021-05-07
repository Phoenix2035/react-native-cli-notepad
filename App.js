import React, { useEffect } from "react"
import { I18nManager } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import RNBootSplash from "react-native-bootsplash";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase from "@react-native-firebase/app"


import { NoteProvider } from "./app/context/Context"
import HomeScreen from "./app/screens/HomeScreen"
import AddNoteScreen from "./app/screens/AddNoteScreen"
import UpdateNoteScreen from "./app/screens/UpdateNoteScreen"

// I18nManager.forceRTL(true)


const Stack = createStackNavigator()

const App = () => {
    PushNotification.configure({
        onRegister: function (token) {
            console.log("TOKEN:", token);
        },
        onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        onAction: function (notification) {
            console.log("ACTION:", notification.action);
            console.log("NOTIFICATION:", notification);
        },
        onRegistrationError: function (err) {
            console.error(err.message, err);
        },
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
    });
    

    useEffect(() => {
        RNBootSplash.hide({ fade: true })

        Firebase.initializeApp(App)
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

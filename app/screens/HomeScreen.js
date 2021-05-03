import React, { useState, useContext, useCallback } from "react"
import { Text, FlatList, TouchableOpacity } from "react-native"
import { Button } from "native-base"
import { useFocusEffect } from "@react-navigation/native"


import Layout from "../components/Layout"


function HomeScreen(props) {

    const [notes, setNotes] = useState([])

    return (
        <Layout title="یاداشت های من" footer={
            <Button full onPress={() => props.navigation.navigate("Add")}>
                <Text style={{ color: "white" }}>
                    اضافه کردن یاداشت جدید
                </Text>
            </Button>
        }>

            <FlatList
                data={notes}
                keyExtractor={note => note.id}
                renderItem={note => (
                    <TouchableOpacity onPress={() => props.navigation.navigate("Update", {
                        id: note.item.id
                    })}>

                        <Text>
                            My Note
                        </Text>

                    </TouchableOpacity>
                )}
            />

        </Layout>
    );
}

export default HomeScreen;
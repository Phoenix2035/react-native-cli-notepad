import React, { useState, useContext, useCallback } from "react"
import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { Button } from "native-base"
import { useFocusEffect } from "@react-navigation/native"


import Layout from "../components/Layout"
import NoteContent from "../components/NoteContent"
import { Context } from "../context/Context"





function HomeScreen(props) {
    const [notes, setNotes] = useState([])
    const { getNotes } = useContext(Context)

    useFocusEffect(   // for lifecycle use this go to add and back to Home, mount Home component
        useCallback(() => {
            setNotes(getNotes)
        }, [getNotes])
    )

    return (
        <Layout
            title="یادداشت های من"
            footer={
                <Button full onPress={() => props.navigation.navigate("Add")}>
                    <Text style={styles.addNote}>
                        اضافه کردن یادداشت جدید
                    </Text>
                </Button>
            }>

            <FlatList
                data={notes}
                keyExtractor={note => note.id}
                renderItem={note => (
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate('Update', { id: note.item.id })
                        }>
                        <NoteContent
                            note={{ ...note }}
                        />
                    </TouchableOpacity>
                )}
            />

        </Layout>
    );
}

const styles = StyleSheet.create({
    addNote: {
        color: "white",
        fontFamily: "Vazir"
    }
})

export default HomeScreen;
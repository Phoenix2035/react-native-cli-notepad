import React, { useState, useContext, useCallback } from "react"
import { Text, FlatList, TouchableOpacity } from "react-native"
import { Button } from "native-base"
import { useFocusEffect } from "@react-navigation/native"


import Layout from "../components/Layout"
import NoteContent from "../components/NoteContent"




function HomeScreen(props) {

    const [notes, setNotes] = useState([])

    return (
        <Layout
            title="یادداشت های من"
            footer={
                <Button full onPress={() => props.navigation.navigate("Add")}>
                    <Text style={{ color: "white"}}>
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
                            note={{ item: { title: 'اولین یاداشت', content: 'اولین متن' } }}
                        />
                    </TouchableOpacity>
                )}
            />

        </Layout>
    );
}

export default HomeScreen;
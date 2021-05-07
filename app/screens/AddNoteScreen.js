import React, { useState, useContext } from "react"
import uuid from "react-native-uuid"
import { StyleSheet } from "react-native"
import { Button, Textarea, Form, Item, Input, Label, Text } from "native-base"


import Layout from "../components/Layout"
import { Context } from "../context/Context"
import { strings } from "../locale/i18n"




function AddNoteScreen(props) {
    const [getTitle, setTitle] = useState("")
    const [getContent, setContent] = useState("")

    const { addNote } = useContext(Context)

    const saveNote = () => {
        const note = {
            id: uuid.v4(),
            title: getTitle,
            content: getContent
        }

        addNote(note)
        props.navigation.navigate("Home")
    }

    return (
        <Layout
            title={strings("addHeaderTitle")}
            footer={
                <>
                    <Button full onPress={saveNote}>
                        <Text>{strings("saveNote_btn")}</Text>
                    </Button>

                    <Button full onPress={() => props.navigation.navigate("Home")}>
                        <Text>
                            {strings("cancel_btn")}
                        </Text>
                    </Button>
                </>
            }>

            <Form style={styles.container}>
                <Item>
                    <Label>{strings("titleInput")}</Label>
                    <Input value={getTitle} onChangeText={title => setTitle(title)} />
                </Item>
                <Textarea
                    style={styles.container}
                    value={getContent}
                    onChangeText={content => setContent(content)}
                    bordered
                    placeholder={strings("contentInput")}
                />
            </Form>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AddNoteScreen;
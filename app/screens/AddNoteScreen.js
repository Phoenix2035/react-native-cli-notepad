import React, { useState, useContext } from "react"
import uuid from "react-native-uuid"
import { StyleSheet } from "react-native"
import { Button, Textarea, Form, Item, Input, Label, Text } from "native-base"


import Layout from "../components/Layout"




function AddNoteScreen(props) {
    const [getTitle, setTitle] = useState("")
    const [getContent, setContent] = useState("")

    const saveNote = () => {
        const note = {
            id: uuid.v4(),
            title: getTitle,
            content: getContent
        }

        // context.addNote(note)
        props.navigation.navigate("Home")
    }

    return (
        <Layout
            title="ساخت یادداشت"
            footer={
                <>
                    <Button full onPress={saveNote}>
                        <Text>ذخیره یادداشت</Text>
                    </Button>

                    <Button full onPress={() => props.navigation.navigate("Home")}>
                        <Text>
                            انصراف
                        </Text>
                    </Button>
                </>
            }>

            <Form style={styles.container}>
                <Item>
                    <Label>عنوان</Label>
                    <Input value={getTitle} onChangeText={title => setTitle(title)} />
                </Item>
                <Textarea
                    style={styles.container}
                    value={getContent}
                    onChangeText={content => setContent(content)}
                    bordered
                    placeholder="متن اصلی اینجا قرار می گیرد"
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
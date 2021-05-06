import React, { useState, useEffect, useContext } from "react"
import { StyleSheet } from "react-native"
import { Button, Textarea, Form, Item, Input, Label, Text } from "native-base"


import Layout from "../components/Layout"
import { Context } from "../context/Context"




function UpdateNoteScreen(props) {
    const [note, setNote] = useState()

    const context = useContext(Context)

    useEffect(() => {
        const noteIndex = context.getNotes.findIndex(item => item.id === props.route.params.id)
        if (noteIndex > -1) {
            setNote({
                id: props.route.params.id,
                title: context.getNotes[noteIndex].title,
                content: context.getNotes[noteIndex].content,
            })
        }

    }, [context.getNotes, props.route.params.id])

    const updateNote = () => {
        context.updateNote(note, props.route.params.id)
        props.navigation.navigate("Home")
    }

    const deleteNote = () => {
        context.deleteNote(props.route.params.id)
        props.navigation.navigate("Home")

    }

    if (!note) return <Text>در حال بارگزاری ...</Text>



    return (
        <Layout
            title="ساخت یادداشت"
            footer={
                <>
                    <Button full onPress={() => props.navigation.navigate("Home")}>
                        <Text>انصراف</Text>
                    </Button>

                    <Button full onPress={updateNote}>
                        <Text>
                            ویرایش یادداشت
                        </Text>
                    </Button>

                    <Button full onPress={deleteNote}>
                        <Text>
                            حذف یادداشت
                        </Text>
                    </Button>
                </>
            }>

            <Form style={styles.container}>
                <Item>
                    <Label>عنوان</Label>
                    <Input value={note.title} onChangeText={title => setNote({
                        title,
                        content: note.content
                    })} />
                </Item>
                <Textarea
                    style={styles.container}
                    value={note.content}
                    onChangeText={content => setNote({
                        title: note.title,
                        content
                    })}
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

export default UpdateNoteScreen;
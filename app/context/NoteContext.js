import React, { useState, useEffect, createContext } from "react"
import { Alert } from "react-native"


export const NoteContext = createContext()

export const NoteProvider = props => {
    const [getNotes, setNotes] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {

            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    const addNote = async note => {

    }

    const updateNote = async (note, id) => {

    }

    const deleteNote = async id => {

    }

    const dataAction = async (action, note, id) => {
        try {
            switch (action) {
                case "Sync":

                    return setNotes([])

                case "Add":

                    return

                case "Update":

                    return

                case "Delete":

                    return


            }
        } catch (error) {
            Alert.alert("خطای یادداشت", "خطایی در ارتباط با پایگاه داده پیش آمده")
            console.log(error)
        }
    }

    return (
        <NoteContext.Provider value={{ getNotes, addNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
import Realm from "realm"

const NoteSchema = {
    name: "Note",
    properties: {
        id: "string",
        title: "string",
        content: "string"
    },
    primaryKey: "id"
}

export const realmDb = async () => {
    return await Realm.open({
        schema: [NoteSchema],
        schemaVersion: 1
    })
}
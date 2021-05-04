import React from 'react';
import { Card, CardItem, Body, H3, Text } from 'native-base';

const NoteContent = ({ note }) => {
    console.log(note);
    return (
        <Card>
            <CardItem>
                <Body>
                    <H3>{note.item.title}</H3>
                    <Text>
                        {note.item.content.length > 120
                            ? `${note.item.content.substr(0, 120)}...`
                            : note.item.content}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    );
};

export default NoteContent;
import * as React from "react"
import { StyleSheet, Text, View } from "react-native"

interface IListItemProps {
    value: number
}

export const ListItem: React.FC<IListItemProps> = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: "salmon",
        justifyContent: "center",
    },
    text: {
        color: "white",
        textAlign: "center",
    },
})

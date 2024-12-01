import * as React from "react"
import { StyleSheet, Text, View } from "react-native"

interface ISectionListItemProps {
    value: number
}

export const SectionListItem: React.FC<ISectionListItemProps> = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "white",
    },
    text: {
        textAlign: "center",
    },
})

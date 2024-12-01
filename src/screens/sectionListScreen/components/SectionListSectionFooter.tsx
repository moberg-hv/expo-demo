import * as React from "react"
import { StyleSheet, View, Text } from "react-native"

export const SectionListSectionFooter: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>{"end of section"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "orange",
    },
})

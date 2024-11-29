import * as React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

export const TextScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* <View>{"Lorem ipsum"}</View> */}
            <View style={styles.section}>
                <Text>{"Regular text "}</Text>
                <Text style={styles.textBold}>{"bold text"}</Text>
                <Text>{" more regular text"}</Text>
            </View>
            {/* DEMO: Text is block scoped */}
            <View style={styles.section}>
                <Text>
                    {"Regular text "}
                    <Text style={styles.textBold}>{"bold text"}</Text>
                    {" more regular text"}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    section: {
        marginVertical: 8,
        borderWidth: 1,
        padding: 12,
        backgroundColor: "white",
    },
    textBold: {
        fontWeight: "bold",
    },
})

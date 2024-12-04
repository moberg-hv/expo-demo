import * as React from "react"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { loremIpsum } from "../../common/loremIpsum"

export const ScrollViewScreen: React.FC = () => {
    const [isScrollable, setIsScrollable] = React.useState(false)

    if (isScrollable) {
        // DEMO: contentContainerStyle vs style
        return (
            <React.Fragment>
                <Pressable
                    style={styles.button}
                    onPress={() => setIsScrollable(!isScrollable)}
                >
                    <Text>{"Disable scroll"}</Text>
                </Pressable>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text>{loremIpsum}</Text>
                </ScrollView>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Pressable
                    style={styles.button}
                    onPress={() => setIsScrollable(!isScrollable)}
                >
                    <Text>{"Enable scroll"}</Text>
                </Pressable>
                <View style={styles.container}>
                    <Text>{loremIpsum}</Text>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        padding: 8,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 4,
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "white",
    },
})

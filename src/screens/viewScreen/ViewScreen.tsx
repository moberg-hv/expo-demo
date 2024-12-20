import * as React from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"

export const ViewScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View
                    style={[
                        styles.view,
                        {
                            width: 200, // px
                        },
                    ]}
                >
                    <Text style={styles.text}>{"200px"}</Text>
                </View>
                <View
                    style={[
                        styles.view,
                        {
                            width: "50%",
                        },
                    ]}
                >
                    <Text style={styles.text}>{"50%"}</Text>
                </View>
                <View
                    style={[
                        styles.horizontalView,
                        {
                            gap: 10,
                        },
                    ]}
                >
                    <View style={[styles.horizontalViewChild, { backgroundColor: "red" }]} />
                    <View style={styles.horizontalViewChild} />
                </View>
                <View
                    style={[
                        styles.horizontalView,
                        {
                            justifyContent: "center",
                        },
                    ]}
                >
                    <View style={[styles.horizontalViewChild, { backgroundColor: "red" }]} />
                    <View style={styles.horizontalViewChild} />
                </View>
                <View
                    style={[
                        styles.horizontalView,
                        {
                            justifyContent: "space-between",
                        },
                    ]}
                >
                    <View style={[styles.horizontalViewChild, { backgroundColor: "red" }]} />
                    <View style={styles.horizontalViewChild} />
                </View>
                <View
                    style={[
                        styles.horizontalView,
                        {
                            justifyContent: "space-around",
                        },
                    ]}
                >
                    <View style={[styles.horizontalViewChild, { backgroundColor: "red" }]} />
                    <View style={styles.horizontalViewChild} />
                </View>
                <View style={styles.shadow} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    container: {
        // display: "flex", // default value
        // flexDirection: "column", // default value
        backgroundColor: "white",
    },
    view: {
        marginVertical: 10,
        height: 100,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
    },
    horizontalView: {
        flexDirection: "row",
        marginVertical: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 4,
    },
    horizontalViewChild: {
        height: 100,
        width: 100,
        backgroundColor: "blue",
    },
    shadow: {
        margin: 20,
        height: 100,
        width: 100,
        backgroundColor: "grey",
        shadowColor: "blue",
        elevation: 20, // android
        // ios
        shadowOffset: {
            width: 15,
            height: 15,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10,
    },
})

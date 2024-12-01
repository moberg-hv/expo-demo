import * as React from "react"
import { StyleSheet, View, Pressable, Text, Alert, ScrollView } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootScreens } from "../../navigation/RootScreens"

type PressableScreenProps = NativeStackScreenProps<RootScreens, "PressableScreen">

export const PressableScreen: React.FC<PressableScreenProps> = ({ navigation }) => {
    const [isPressed, setIsPressed] = React.useState(false)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Pressable
                style={[styles.pressableDefault, styles.pressIn]}
                onPressIn={() => {
                    Alert.alert("Alert!", "'Press in' triggered")
                }}
            >
                <Text style={styles.text}>{"Press in"}</Text>
            </Pressable>
            <Pressable
                style={[styles.pressableDefault, styles.pressOut]}
                onPressOut={() => {
                    Alert.alert("Alert!", "'Press out' triggered")
                }}
            >
                <Text style={styles.text}>{"Press out"}</Text>
            </Pressable>
            <Pressable
                style={[styles.pressableDefault, , styles.press]}
                onPress={() => {
                    Alert.alert("Alert!", "'Press' triggered")
                }}
            >
                <Text style={styles.text}>{"Press"}</Text>
            </Pressable>
            <Pressable
                style={[styles.pressableDefault, , styles.pressLong]}
                onLongPress={() => {
                    Alert.alert("Alert!", "'Long press' triggered")
                }}
            >
                <Text style={styles.text}>{"Press long"}</Text>
            </Pressable>
            <Pressable
                style={[styles.pressableUniversal, isPressed ? styles.pressableUniversalPressed : {}]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => {
                    Alert.alert("Short press", "That was over quick...", [
                        {
                            text: "Try again",
                            isPreferred: true,
                            style: "default",
                        },
                        {
                            text: "Back",
                            onPress: navigation.goBack,
                            style: "destructive",
                        },
                        {
                            text: "Cancel",
                            style: "cancel",
                        },
                    ])
                }}
                onLongPress={() => {
                    Alert.alert("Long press", "500ms")
                }}
            >
                <Text style={styles.text}>{"Play with me"}</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center",
    },
    pressableDefault: {
        borderWidth: 4,
        borderColor: "yellow",
        borderStyle: "dashed",
        borderRadius: 8,
        marginVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "white",
    },
    pressIn: {
        paddingVertical: 8,
    },
    pressOut: {
        paddingVertical: 16,
    },
    press: {
        paddingVertical: 32,
    },
    pressLong: {
        paddingVertical: 48,
    },
    pressableUniversal: {
        marginVertical: 32,
        padding: 24,
        backgroundColor: "white",
    },
    pressableUniversalPressed: {
        backgroundColor: "yellow",
    },
    text: {
        textAlign: "center",
    },
})

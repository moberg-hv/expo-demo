import * as React from "react"
import { StyleSheet, Pressable, ScrollView, Text, Platform } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { RootScreens } from "../../navigation/RootScreens"

type HomeProps = NativeStackScreenProps<RootScreens, "Home">

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { top, bottom } = useSafeAreaInsets()

    return (
        <ScrollView
            contentContainerStyle={[
                styles.scrollContainer,
                {
                    paddingTop: top,
                    paddingBottom: bottom + 20,
                },
            ]}
        >
            <Text style={styles.title}>{"React Native"}</Text>
            <Text style={styles.subtitle}>{`Running on ${Platform.OS}`}</Text>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("ViewScreen")}
            >
                <Text>{"View"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("ScrollViewScreen")}
            >
                <Text>{"Scroll View"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("SafeAreaScreen")}
            >
                <Text>{"Safe Area"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("KeyboardScreen")}
            >
                <Text>{"Keyboard"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("TextScreen")}
            >
                <Text>{"Text"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("ImageScreen")}
            >
                <Text>{"Image"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("PressableScreen")}
            >
                <Text>{"Pressable"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("FlatListScreen")}
            >
                <Text>{"Flat list"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("SectionListScreen")}
            >
                <Text>{"Section list"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("ModalScreen")}
            >
                <Text>{"Modal"}</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 32,
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 32,
    },
    itemContainer: {
        marginVertical: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: "blue",
        borderStyle: "dashed",
        borderRadius: 4,
    },
})

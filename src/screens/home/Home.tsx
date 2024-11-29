import { NativeStackScreenProps } from "@react-navigation/native-stack"
import * as React from "react"
import { StyleSheet, Pressable, ScrollView, Text } from "react-native"
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
            <Text style={styles.title}>{"React native"}</Text>
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
        marginVertical: 32,
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
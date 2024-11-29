import { NativeStackScreenProps } from "@react-navigation/native-stack"
import * as React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { RootScreens } from "../../navigation/RootScreens"

type SafeAreaScreen = NativeStackScreenProps<RootScreens, "SafeAreaScreen">

export const SafeAreaScreen: React.FC<SafeAreaScreen> = ({ navigation }) => {
    const { top, bottom, left, right } = useSafeAreaInsets()

    const [isSafe, setIsSafe] = React.useState(false)

    return (
        <View
            style={[
                styles.container,
                {
                    marginTop: isSafe ? top : 0,
                    marginBottom: isSafe ? bottom : 0,
                    marginLeft: isSafe ? left : 0,
                    marginRight: isSafe ? right : 0,
                },
            ]}
        >
            <Pressable
                style={styles.itemContainer}
                onPress={() => setIsSafe(!isSafe)}
            >
                <Text style={styles.itemText}>{"Toggle safe area"}</Text>
            </Pressable>
            <Pressable
                style={styles.itemContainer}
                onPress={navigation.goBack}
            >
                <Text style={styles.itemText}>{"Go back"}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center", // DEMO
        backgroundColor: "green",
        paddingHorizontal: 20,
    },
    itemContainer: {
        marginVertical: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
    },
    itemText: {
        textAlign: "center",
        color: "white",
    },
})

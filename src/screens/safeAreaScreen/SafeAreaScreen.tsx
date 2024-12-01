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
            <Text style={styles.text}>{"TOP"}</Text>
            <View>
                <Pressable
                    style={styles.itemContainer}
                    onPress={() => setIsSafe(!isSafe)}
                >
                    <Text style={styles.text}>{"Toggle safe area"}</Text>
                </Pressable>
                <Pressable
                    style={styles.itemContainer}
                    onPress={navigation.goBack}
                >
                    <Text style={styles.text}>{"Go back"}</Text>
                </Pressable>
            </View>
            <Text style={styles.text}>{"BOTTOM"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "space-between",
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
    text: {
        textAlign: "center",
        color: "white",
    },
})

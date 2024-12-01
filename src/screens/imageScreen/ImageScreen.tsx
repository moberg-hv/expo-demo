import * as React from "react"
import { StyleSheet, ScrollView, Image, View, Text } from "react-native"

export const ImageScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.itemContainer}>
                <Image
                    source={require("../../assets/images/react-native-icon.png")}
                    style={styles.image}
                />
                <Text style={styles.text}>{"Local"}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Image
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/2560px-Flag_of_Iceland.svg.png",
                    }}
                    style={styles.image}
                />
                <Text style={styles.text}>{"Remote url"}</Text>
            </View>

            <View style={styles.itemContainer}>
                <Image
                    source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                    }}
                    style={styles.image}
                />
                <Text style={styles.text}>{"base64"}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        marginVertical: 10,
        width: "50%",
        height: 200,
        resizeMode: "contain",
    },
    text: {
        flexGrow: 1,
        textAlign: "center",
    },
})

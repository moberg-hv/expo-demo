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
                        uri: "https://s3.eu-central-1.amazonaws.com/eu.peopleforce.io/ozr80wb5ixd1i1p7c3migl0z5m06?response-content-disposition=inline%3B%20filename%3D%22Moberg_logo_brand%20color.png%22%3B%20filename%2A%3DUTF-8%27%27Moberg_logo_brand%2520color.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4L5NWT3XV5H4MYNH%2F20241201%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241201T124201Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5623f3dd4fba3b8cc91553cdf78807f68b4e17d980db1f34e554500eafb90d5c",
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
        verticalAlign: "middle",
    },
})

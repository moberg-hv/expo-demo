import * as React from "react"
import { StyleSheet, View, Pressable, Modal, Text, ActivityIndicator } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export const ModalScreen: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => setIsOpen(true)}
                >
                    <Text style={styles.text}>{"Open modal"}</Text>
                </Pressable>
            </View>
            <Modal
                visible={isOpen}
                animationType="slide"
                onRequestClose={() => setIsOpen(false)}
            >
                <View style={styles.modalContainer}>
                    <Pressable onPress={() => setIsOpen(false)}>
                        <FontAwesome
                            name="close"
                            size={24}
                            color="black"
                        />
                    </Pressable>
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size={120} />
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    pressable: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 4,
    },
    text: {
        textAlign: "center",
    },
    modalContainer: {
        flexGrow: 1,
        padding: 20,
    },
    loaderContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

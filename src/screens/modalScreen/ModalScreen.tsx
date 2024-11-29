import * as React from "react"
import { StyleSheet, View, Pressable, Modal, Text, Button } from "react-native"

export const ModalScreen: React.FC = () => {
    const [isFullScreenOpen, setIsFullScreenOpen] = React.useState(false)
    const [isFormSheetOpen, setIsFormSheetOpen] = React.useState(false)

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => setIsFullScreenOpen(true)}
                >
                    <Text style={styles.text}>{"Open fullscreen modal"}</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => setIsFormSheetOpen(true)}
                >
                    <Text style={styles.text}>{"Open form sheet modal"}</Text>
                </Pressable>
            </View>
            <Modal
                visible={isFullScreenOpen}
                animationType="slide"
                presentationStyle="fullScreen"
                transparent={false}
                statusBarTranslucent={false}
                onRequestClose={() => setIsFullScreenOpen(false)}
            >
                <View style={styles.modalContainer}>
                    <Button
                        title="Close modal"
                        onPress={() => setIsFullScreenOpen(false)}
                    />
                </View>
            </Modal>
            <Modal
                visible={isFormSheetOpen}
                animationType="slide"
                presentationStyle="formSheet"
                transparent={false}
                statusBarTranslucent={false}
                onRequestClose={() => setIsFormSheetOpen(false)}
            >
                <View style={styles.modalContainer}>
                    <Button
                        title="Close modal"
                        onPress={() => setIsFormSheetOpen(false)}
                    />
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
        marginVertical: 12,
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
        justifyContent: "center",
    },
})

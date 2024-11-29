import * as React from "react"
import {
    Button,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    View,
    Text,
    Keyboard,
    ScrollView,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useHeaderHeight } from "@react-navigation/elements"

export const KeyboardScreen: React.FC = () => {
    const { top } = useSafeAreaInsets()
    const headerHeight = useHeaderHeight()

    const [isAvoidingKeyboard, setIsAvoidingKeyboard] = React.useState(false)

    if (isAvoidingKeyboard) {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={headerHeight}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View>
                        <Text>{"Keyboard handled: true"}</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Dismiss keyboard"
                                onPress={Keyboard.dismiss}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="default"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="email"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="phone"
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="number"
                            keyboardType="decimal-pad"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title="Back to default"
                        onPress={() => setIsAvoidingKeyboard(false)}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    } else {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View>
                        <Text>{"Keyboard handled: false"}</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Dismiss keyboard"
                                onPress={Keyboard.dismiss}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="default"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="email"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="phone"
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="number"
                            keyboardType="decimal-pad"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            secureTextEntry
                            keyboardType="visible-password"
                        />
                    </View>
                    <Button
                        title="Handle keyboard"
                        onPress={() => setIsAvoidingKeyboard(true)}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "space-between",
    },
    buttonContainer: {
        marginVertical: 12,
    },
    input: {
        marginVertical: 4,
        padding: 12,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "transparent",
        verticalAlign: "top",
    },
})

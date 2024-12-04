import * as React from "react"
import { Button, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View, Text, ScrollView } from "react-native"
import { useHeaderHeight } from "@react-navigation/elements"
import { loremIpsum } from "../../common/loremIpsum"

export const KeyboardScreen: React.FC = () => {
    const headerHeight = useHeaderHeight()

    const [showLargeContent, setShowLargeContent] = React.useState(false)
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
                        {showLargeContent && <Text>{loremIpsum}</Text>}
                        <Button
                            title="Toggle content"
                            onPress={() => setShowLargeContent(!showLargeContent)}
                        />
                        <Text style={styles.keyboardStatus}>{"Keyboard handled: true"}</Text>
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
                        {showLargeContent && <Text>{loremIpsum}</Text>}
                        <Button
                            title="Toggle content"
                            onPress={() => setShowLargeContent(!showLargeContent)}
                        />
                        <Text style={styles.keyboardStatus}>{"Keyboard handled: false"}</Text>
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
    keyboardStatus: {
        fontSize: 24,
        marginVertical: 20,
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

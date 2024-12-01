import * as React from "react"
import { Button, StyleSheet, View } from "react-native"

interface IListEmptyProps {
    onLoadPress: () => void
}

export const ListEmpty: React.FC<IListEmptyProps> = ({ onLoadPress }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Load data"
                onPress={onLoadPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
    },
})

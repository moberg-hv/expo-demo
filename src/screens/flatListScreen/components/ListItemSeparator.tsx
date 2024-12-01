import * as React from "react"
import { StyleSheet, View } from "react-native"

interface IListItemSeparatorComponentProps {
    isHorizontal: boolean
}

export const ListItemSeparator: React.FC<IListItemSeparatorComponentProps> = ({ isHorizontal }) => {
    return <View style={[styles.container, isHorizontal ? { width: 2 } : { height: 2 }]} />
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "darkblue",
    },
})

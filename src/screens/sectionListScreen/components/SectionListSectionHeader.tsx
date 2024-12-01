import * as React from "react"
import { StyleSheet, View, Text } from "react-native"

interface ISectionListSectionHeaderProps {
    title: string
}

export const SectionListSectionHeader: React.FC<ISectionListSectionHeaderProps> = ({ title }) => (
    <View style={styles.container}>
        <Text>{title}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "yellow",
    },
})

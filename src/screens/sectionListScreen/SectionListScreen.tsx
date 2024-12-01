import * as React from "react"
import { SectionList, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { SectionListItem } from "./components/SectionListItem"
import { SectionListSectionHeader } from "./components/SectionListSectionHeader"
import { SectionListSectionFooter } from "./components/SectionListSectionFooter"

export const SectionListScreen: React.FC = () => {
    const { bottom } = useSafeAreaInsets()

    const sections = Array.from(Array(10)).map((_e, i) => ({
        title: `${i * 10} - ${(i + 1) * 10 - 1}`,
        data: Array.from(Array(10)).map((_el, j) => i * 10 + j),
    }))

    const sectionListKeyExtractor = React.useCallback((item: number, _index: number) => item.toString(), [])

    const renderSectionListItem = React.useCallback(
        ({ item }: { item: number }) => <SectionListItem value={item} />,
        []
    )

    return (
        <SectionList
            contentContainerStyle={[
                styles.scrollContainer,
                {
                    paddingTop: 20,
                    paddingBottom: bottom + 20,
                },
            ]}
            sections={sections}
            ListHeaderComponent={<Text style={styles.header}>{"List header"}</Text>}
            ListFooterComponent={<Text style={styles.footer}>{"List footer"}</Text>}
            renderSectionHeader={({ section: { title } }) => <SectionListSectionHeader title={title} />}
            renderSectionFooter={() => <SectionListSectionFooter />}
            SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
            keyExtractor={sectionListKeyExtractor}
            renderItem={renderSectionListItem}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            // stickySectionHeadersEnabled  // DEMO
        />
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    header: {
        textAlign: "center",
        padding: 30,
        backgroundColor: "lightseagreen",
    },
    footer: {
        textAlign: "center",
        padding: 30,
        backgroundColor: "salmon",
    },
    sectionSeparator: {
        height: 10,
        backgroundColor: "black",
    },
    itemSeparator: {
        height: 2,
        backgroundColor: "blue",
    },
})

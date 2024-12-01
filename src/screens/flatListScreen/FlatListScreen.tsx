import * as React from "react"
import { Button, FlatList, StyleSheet, View, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ListItemSeparator } from "./components/ListItemSeparator"
import { ListItem } from "./components/ListItem"
import { ListEmpty } from "./components/ListEmpty"

export const FlatListScreen: React.FC = () => {
    const { bottom } = useSafeAreaInsets()

    const [data, setData] = React.useState<number[]>([])
    const [isRefreshing, setIsRefreshing] = React.useState(false)
    const [isHorizontal, setIsHorizontal] = React.useState(false)
    const [hasColumns, setHasColumns] = React.useState(false)

    const handleRefresh = () => {
        setIsRefreshing(true)
        setTimeout(() => {
            setData(Array.from(Array(10)).map((_e, i) => i + 1))
            setIsRefreshing(false)
        }, 500)
    }

    const handleEndReached = () => {
        setTimeout(() => {
            if (data.length > 0) {
                setData((prev) => [...prev, ...Array.from(Array(10)).map((_e, i) => i + 1 + prev.length)])
            }
        }, 300)
    }

    const handleChangeAxisPress = () => {
        setHasColumns(false)
        setIsHorizontal(!isHorizontal)
        setData(Array.from(Array(10)).map((_e, i) => i + 1))
    }

    const handleChangeColumnsPress = () => {
        setIsHorizontal(false)
        setHasColumns(!hasColumns)
        setData(Array.from(Array(10)).map((_e, i) => i + 1))
    }

    const flatListKeyExtractor = React.useCallback(
        (item: number, _index: number) => item.toString(),
        [data, isHorizontal, hasColumns]
    )

    const renderFlatListItem = React.useCallback(
        ({ item }: { item: number }) => <ListItem value={item} />,
        [data, isHorizontal, hasColumns]
    )

    return (
        <React.Fragment>
            <View style={styles.buttonsContainer}>
                <Button
                    title={isHorizontal ? "Vertical" : "Horizontal"}
                    onPress={handleChangeAxisPress}
                />
                <Button
                    title={hasColumns ? "1 column" : "2 columns"}
                    onPress={handleChangeColumnsPress}
                />
            </View>
            <FlatList
                key={hasColumns ? "2" : "1"}
                contentContainerStyle={[
                    styles.scrollContainer,
                    {
                        paddingTop: 20,
                        paddingBottom: bottom + 20,
                    },
                ]}
                horizontal={isHorizontal}
                numColumns={hasColumns ? 2 : undefined}
                columnWrapperStyle={hasColumns ? styles.column : undefined}
                data={data}
                renderItem={renderFlatListItem}
                keyExtractor={flatListKeyExtractor}
                ItemSeparatorComponent={() => <ListItemSeparator isHorizontal={isHorizontal} />}
                ListHeaderComponent={<Text style={styles.header}>{"HEADER"}</Text>}
                ListFooterComponent={<Text style={styles.footer}>{"FOOTER"}</Text>}
                ListEmptyComponent={() => (
                    <ListEmpty onLoadPress={() => setData(Array.from(Array(10)).map((_e, i) => i + 1))} />
                )}
                onEndReached={handleEndReached}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    column: {
        gap: 10,
    },
    header: {
        textAlign: "center",
        backgroundColor: "yellow",
    },
    footer: {
        textAlign: "center",
        backgroundColor: "lightseagreen",
        paddingVertical: 10,
    },
})

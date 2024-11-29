import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { RootNavigator } from "./screens/RootNavigator"

export const Main: React.FC = () => {
    const { top, bottom } = useSafeAreaInsets()

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { RootNavigator } from "./screens/RootNavigator"

export const Main: React.FC = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootScreens } from "../navigation/RootScreens"
import { Home } from "./home/Home"
import { ViewScreen } from "./viewScreen/ViewScreen"
import { ScrollViewScreen } from "./scrollViewScreen/ScrollViewScreen"
import { SafeAreaScreen } from "./safeAreaScreen/SafeAreaScreen"
import { KeyboardScreen } from "./keyboardScreen/KeyboardScreen"
import { TextScreen } from "./textScreen/TextScreen"
import { ImageScreen } from "./imageScreen/ImageScreen"
import { PressableScreen } from "./pressableScreen/PressableScreen"
import { FlatListScreen } from "./flatListScreen/FlatListScreen"
import { SectionListScreen } from "./sectionListScreen/SectionListScreen"
import { ModalScreen } from "./modalScreen/ModalScreen"

const RootStack = createNativeStackNavigator<RootScreens>()

export const RootNavigator: React.FC = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="ViewScreen"
                component={ViewScreen}
            />
            <RootStack.Screen
                name="ScrollViewScreen"
                component={ScrollViewScreen}
            />
            <RootStack.Screen
                name="SafeAreaScreen"
                component={SafeAreaScreen}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="KeyboardScreen"
                component={KeyboardScreen}
            />
            <RootStack.Screen
                name="TextScreen"
                component={TextScreen}
            />
            <RootStack.Screen
                name="ImageScreen"
                component={ImageScreen}
            />
            <RootStack.Screen
                name="PressableScreen"
                component={PressableScreen}
            />
            <RootStack.Screen
                name="FlatListScreen"
                component={FlatListScreen}
            />
            <RootStack.Screen
                name="SectionListScreen"
                component={SectionListScreen}
            />
            <RootStack.Screen
                name="ModalScreen"
                component={ModalScreen}
                options={{
                    presentation: "modal",
                }}
            />
        </RootStack.Navigator>
    )
}

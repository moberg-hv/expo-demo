import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Main } from "./src/Main"

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar
                translucent
                animated
                style="dark"
            />
            <Main />
        </SafeAreaProvider>
    )
}

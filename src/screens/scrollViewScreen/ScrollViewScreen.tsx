import * as React from "react"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"

const screenContent = `Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus nostra fames vestibulum congue urna arcu sapien quisque. Litora sed dapibus montes senectus integer natoque fermentum phasellus. Anetus inceptos in potenti in integer felis imperdiet cubilia. Lectus etiam mauris tincidunt sodales sodales. Habitant id ipsum lacus fringilla nibh mattis. Ullamcorper nec orci consequat per laoreet ullamcorper mus.

Maecenas aliquet volutpat dis platea turpis commodo. Dictumst tortor libero congue enim ultrices egestas taciti habitant magnis? Risus ut risus efficitur integer commodo molestie ligula consequat. Porttitor suspendisse nulla sem amet fusce at egestas. Platea quis ad; blandit netus tincidunt libero senectus libero. Netus aenean fermentum vulputate, enim venenatis maecenas ligula massa sem. Cras cras potenti proin fames nulla efficitur. Rhoncus curabitur mollis curabitur netus finibus semper litora semper. Rhoncus quisque magna mi interdum, fermentum adipiscing sagittis. Egestas purus pulvinar praesent ex leo; blandit consequat.

Mauris pretium quis; auctor feugiat dui iaculis mi pulvinar! Ut conubia non diam nisl est. Euismod nisi augue, turpis pellentesque habitasse purus. Libero pharetra tempor amet nisl ornare maximus justo! Eleifend natoque hendrerit curabitur maecenas diam ipsum. Fames ridiculus iaculis nascetur dictum elementum luctus tincidunt vestibulum. Mi sem proin integer ligula integer velit pulvinar.

Luctus viverra phasellus sed neque varius fringilla. Laoreet quis neque dignissim; fringilla fringilla pulvinar habitant. Iaculis ullamcorper ornare fusce placerat augue urna arcu felis bibendum. Ad potenti suscipit non fringilla in pretium tellus ad. Elementum mi duis taciti consequat nibh est inceptos litora. Risus at luctus dictum libero primis venenatis. Vehicula ullamcorper ad commodo sodales ad mus eget at.

Conubia in condimentum platea, mus vulputate ultricies ullamcorper feugiat. Imperdiet massa sociosqu a class dignissim senectus lacus sollicitudin convallis. Torquent sollicitudin molestie sociosqu placerat nostra libero. Primis eu natoque convallis pellentesque turpis pharetra. Et ultricies mattis scelerisque feugiat pretium. Class elementum eros viverra, class nulla fermentum. Nec lectus sollicitudin curabitur integer sapien etiam et auctor neque. Habitasse arcu litora habitant quis habitasse facilisis.

Duis efficitur interdum diam magnis praesent sollicitudin efficitur ullamcorper. Etiam varius velit natoque orci litora. Sagittis faucibus maximus metus, ligula pretium sociosqu. Nascetur leo per ex placerat imperdiet imperdiet fermentum. Ullamcorper aliquam inceptos curae; senectus pulvinar donec morbi conubia. Suspendisse lectus fermentum pharetra potenti cras sociosqu consequat placerat suscipit. Suscipit senectus pretium placerat diam conubia habitant, ut pellentesque. Fermentum eros netus mus tortor primis quisque senectus porttitor. Consectetur diam sollicitudin; nunc donec pretium curae eget.

Praesent odio congue vitae nulla montes senectus. Morbi posuere enim, purus mattis mi cubilia. Massa malesuada convallis urna purus tincidunt dictum odio. Varius egestas montes bibendum ac sem blandit. Eu ornare dignissim fusce erat torquent fusce ornare. Pellentesque ornare per pretium nullam odio morbi litora mi. Morbi mollis quisque magna, sociosqu a purus posuere. Aliquam senectus vulputate maximus nec vitae natoque vivamus himenaeos. Nunc erat eros integer tellus, condimentum litora efficitur.

Varius quis pretium egestas neque finibus. Rutrum molestie porta dui molestie vestibulum finibus a. Turpis sit in feugiat mus; id sollicitudin tellus. Aliquam nullam feugiat vulputate egestas tempor. Eu felis sodales quam ac mus. Fames fermentum bibendum pharetra sollicitudin imperdiet ornare. Ridiculus egestas viverra vivamus viverra sagittis. Curae condimentum mi inceptos etiam dictum amet in odio pharetra. Rhoncus nam hac dapibus; aptent ipsum adipiscing senectus mattis.

Velit scelerisque netus felis libero, semper lobortis nulla. Urna amet eget nostra, amet accumsan at ex eu. Ipsum posuere turpis mi aliquet; massa cras ac. Placerat lectus consequat facilisi mi ullamcorper penatibus dictum leo. Quisque pulvinar augue viverra aptent, class cursus blandit. Purus inceptos semper donec; litora pharetra accumsan turpis. Sodales feugiat adipiscing est orci class adipiscing.

Aegestas tristique aliquet lectus ullamcorper arcu volutpat amet. Suscipit curabitur vel cras iaculis nullam eget molestie volutpat habitasse. Pharetra himenaeos arcu maecenas nam ridiculus mattis. Nunc vivamus curabitur mauris orci aliquet. Nisi himenaeos sodales placerat iaculis lorem convallis. Vestibulum convallis nascetur nec eros cursus consectetur. Integer faucibus bibendum hendrerit, malesuada urna lobortis.`

export const ScrollViewScreen: React.FC = () => {
    const [isScrollable, setIsScrollable] = React.useState(false)

    if (isScrollable) {
        // DEMO: contentContainerStyle vs style
        return (
            <React.Fragment>
                <Pressable
                    style={styles.button}
                    onPress={() => setIsScrollable(!isScrollable)}
                >
                    <Text>{"Disable scroll"}</Text>
                </Pressable>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text>{screenContent}</Text>
                </ScrollView>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Pressable
                    style={styles.button}
                    onPress={() => setIsScrollable(!isScrollable)}
                >
                    <Text>{"Enable scroll"}</Text>
                </Pressable>
                <View style={styles.container}>
                    <Text>{screenContent}</Text>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        padding: 8,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 4,
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "white",
    },
})

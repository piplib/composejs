import { Box } from "../src/composable/Box"
import { Button } from "../src/composable/Button"
import { Column } from "../src/composable/Column"
import { Text } from "../src/composable/Text"
import { Align, JustifyContent } from "../src/core/constants"
import { LaunchOnce } from "../src/core/effects"

export const SimpleClock = scope => {
    let time = scope.stateOf(new Date().toLocaleTimeString())

    Box({
        content: scope => {
            Column({
                content: scope => {
                    Text({ text: "Simple Clock" }, scope)
                    Text({ text: time.value }, scope)
                }
            }, scope)
        },
        modifier: Modifier.justifyContent(JustifyContent.Center)
            .align(Align.Center).fillMaxSize()
    }, scope)


    Button({
        content: scope => {
            Text({ text: "Refresh" }, scope)
        },
        onClick: e => {
            time.value = new Date().toLocaleTimeString()
        }
    }, scope)

    // LaunchOnce(() => {
    //     setInterval(() => {
    //         time.value = new Date().toLocaleTimeString()
    //     }, 1000)
    // }, scope)
}
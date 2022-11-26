import React from "react";
import { Button, ButtonGroup, Center, Text, VStack } from '@chakra-ui/react'

export default class Start extends React.Component {
    render() {
        return (
            <Center>
                <VStack>
                    <Text> {this.props.stage}</Text>
                    <Button width={[100, 200, 300]} onClick={() => this.props.onClick()}>Start</Button>
                    <Text align="center">By clicking start you agree to sharing information with Goldman Sachs</Text>
                </VStack >
            </Center >
        )
    }
}
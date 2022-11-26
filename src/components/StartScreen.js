import "./style/StartScreen.css";
import React from "react";
import { Button, Center, Text, VStack } from '@chakra-ui/react'

export default class StartScreen extends React.Component {
    render() {
        return (
            <Center>
                <VStack>
                    <Button width={[100, 200, 300]} size='lg' colorScheme='blue' onClick={() => this.props.onClick()}>Start</Button>
                    <Text align="center">By clicking 'Start' you agree to sharing information with Goldman Sachs that will be used in recruitment process.</Text>
                </VStack >
            </Center >
        )
    }
}
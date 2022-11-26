
import React from "react";
import { Center, Button, VStack, Image, Box, Heading } from '@chakra-ui/react'
import "react-color-palette/lib/css/styles.css";

export default function ColorComparison(props) {
    return (
        <Center>
            <VStack>
                <Image boxSize={[200, 300, 400]} src="https://brandpalettes.com/wp-content/uploads/2020/07/Goldman-Sachs-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1"></Image>
                <Box boxSize={[200, 300, 400]} bg={props.guessedColor.hex}></Box>
                <Heading>Nice try!</Heading>
                <Heading>+{props.delta}</Heading>
                <Button onClick={() => props.onClick()}>Submit</Button>
            </VStack>
        </Center >
    )
};

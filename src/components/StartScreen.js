import "./style/StartScreen.css";
import React from "react";
import { Button, Center, Text, VStack, Image } from "@chakra-ui/react";

export default class StartScreen extends React.Component {
  render() {
    return (
      <Center>
        <VStack>
          <Image
            boxSize={[100, 200, 300]}
            src="https://brandpalettes.com/wp-content/uploads/2020/07/Goldman-Sachs-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1"
          />
          <Button
            width={[100, 200, 300]}
            size="lg"
            colorScheme="blue"
            onClick={() => this.props.onClick()}
          >
            Start
          </Button>
          <Text align="center">
            By clicking 'Start' you agree to sharing information with Goldman
            Sachs that will be used in recruitment process.
          </Text>
        </VStack>
      </Center>
    );
  }
}

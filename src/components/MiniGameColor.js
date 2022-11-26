import React from "react";
import { Center, Button, VStack, Image, Box, Heading } from '@chakra-ui/react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import "./style/ColorPicker.css"

export default function MiniGameColor(props) {
  const [color, setColor] = useColor("hex", "#0033CC");
  return (
    <Center>
      <VStack>
        <Heading>Pick the shade of blue that is in Goldman Sachs' logo.</Heading>
        <ColorPicker width={300} height={300} className="picker"
          color={color}
          onChange={setColor} hideHSV hideHEX dark />
        <Button onClick={() => props.onClick(color)}>Next question</Button>
      </VStack>
    </Center>
  )
};

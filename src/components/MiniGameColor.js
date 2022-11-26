import React from "react";
import {
  Center,
  Button,
  Image,
  Box,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const goldmanBlue = {
  r: 107,
  g: 150,
  b: 195,
};
const perfectGoldmanPayoff = 255 * 255 * 3;

function handleGuessColor(color) {
  const deltaR = color.rgb.r - goldmanBlue.r;
  const deltaG = color.rgb.g - goldmanBlue.g;
  const deltaB = color.rgb.b - goldmanBlue.b;
  let delta = Math.floor(
    ((perfectGoldmanPayoff -
      (deltaR * deltaR + deltaG * deltaG + deltaB * deltaB) * 8) /
      perfectGoldmanPayoff) *
      100
  );

  if (delta < 0) {
    delta = 0;
  }

  return delta;
}

export default function MiniGameColor(props) {
  const [color, setColor] = useColor("hex", "#0033CC");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const delta = handleGuessColor(color);

  return (
    <Center>
      <VStack>
        <Heading>
          Pick the shade of blue that is in Goldman Sachs' logo.
        </Heading>
        <ColorPicker
          width={300}
          height={300}
          className="picker"
          color={color}
          onChange={setColor}
          hideHSV
          hideHEX
          dark
        />
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Submit
        </Button>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image
                boxSize={[200, 300, 400]}
                src="https://brandpalettes.com/wp-content/uploads/2020/07/Goldman-Sachs-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1"
              ></Image>
              <Box boxSize={[200, 300, 400]} bg={color.hex}></Box>
              <Heading>Nice try!</Heading>
              <Heading>+{delta}</Heading>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => {onClose(); props.handleMiniGame(delta)}}>Next question</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Center>
  );
}

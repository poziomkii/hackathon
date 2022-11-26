import "./style/MiniGame.css";
import React, { useState } from "react";
import {
  Heading,
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.600",
          color: "white",
          borderColor: "blue.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function MiniGameWhatIsGS() {
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const checkAnswer = () => {
    setCorrectAnswer(answer === "bank");
    setPoints(answer === "bank" ? 25 : 0);
  };
  const options = ["fintech", "startup", "bank", "oven manufacturer"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "answer",
    defaultValue: "",
    onChange: setAnswer,
  });

  const group = getRootProps();

  return (
    <div className="mini-game-screen">
      <Heading>What is Goldman Sachs?</Heading>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      {correctAnswer !== true && correctAnswer !== false && (
        <Button
          colorScheme="blue"
          variant="outline"
          className="button"
          onClick={checkAnswer}
        >
          Check
        </Button>
      )}
      {correctAnswer && (
        <Alert status="success" variant="subtle">
          <AlertIcon />
          Congratulations! That's the correct answer
        </Alert>
      )}
      {correctAnswer === false && (
        <Alert status="info" variant="subtle">
          <AlertIcon />
          Nice try! But Goldman Sachs has offices in all those countries.
        </Alert>
      )}
    </div>
  );
}

export default MiniGameWhatIsGS;

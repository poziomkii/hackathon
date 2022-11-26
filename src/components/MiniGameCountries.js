import "./style/MiniGame.css";
import React, { useState } from "react";
import {
  Heading,
  Box,
  useCheckbox,
  useCheckboxGroup,
  Stack,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

function CheckboxCard(props) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

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

function MiniGameCountries(props) {
  const [answer, setAnswer] = useState([]);
  const [points, setPoints] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState();
  const options = [
    "United States",
    "Poland",
    "Australia",
    "New Zealand",
    "Germany",
    "Korea",
    "Mexico",
    "Ireland",
    "Sweden",
    "Monaco",
    "Peru",
    "Canada",
    "South Africa",
    "United Kingdom",
    "Chile",
    "Greater China",
    "Denmark",
    "Indonesia",
    "Japan",
    "Brazil",
    "Italy",
    "France",
    "Saudi Arabia",
    "India",
    "Spain",
    "Belgium",
    "Argentina",
    "Greece",
    "Russia",
    "United Arab Emirates",
    "Singapore",
    "Qatar",
    "Switzerland",
  ];

  const checkAnswer = () => {
    setCorrectAnswer(answer.length === options.length);
    setPoints(Math.floor((answer.length / options.length) * 100));
  };

  const { getCheckboxProps } = useCheckboxGroup({
    name: "answer",
    defaultValue: "",
    onChange: setAnswer,
  });

  return (
    <div className="mini-game-screen countries">
      <Heading>In what countries does Goldman Sachs have offices?</Heading>
      <Stack>
        {options.map((value) => {
          const radio = getCheckboxProps({ value });
          return (
            <CheckboxCard key={value} {...radio}>
              {value}
            </CheckboxCard>
          );
        })}
      </Stack>
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
          <Heading size="sm"> +{points} points </Heading>
        </Alert>
      )}
      {correctAnswer === false && (
        <Alert status="info" variant="subtle">
          <AlertIcon />
          Nice try! But Goldman Sachs has offices in all those countries.
          <Heading size="sm"> +{points} points</Heading>
        </Alert>
      )}
      {(correctAnswer || correctAnswer === false) && (
        <Button
          width={[100, 200, 350]}
          size="lg"
          colorScheme="blue"
          onClick={() => props.handleMiniGame(points)}
        >
          Next
        </Button>
      )}
    </div>
  );
}

export default MiniGameCountries;

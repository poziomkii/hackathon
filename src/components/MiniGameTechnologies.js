import "./style/MiniGame.css";
import React, { useState } from "react";
import {
  Heading,
  Box,
  Button,
  useCheckbox,
  useCheckboxGroup,
  Stack,
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

function MiniGameTechnologies(props) {
  const [answer, setAnswer] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0);
  const options = [
    "Java",
    "Spring",
    "Snowflake",
    "Python",
    "R",
    "React",
    "MongoDB",
    "Prometheus",
    "Grafana",
    "Kubernetes",
  ];

  const { getCheckboxProps } = useCheckboxGroup({
    name: "answer",
    defaultValue: "",
    onChange: setAnswer,
  });

  return (
    <div className="mini-game-screen technologies">
      <Heading>What technologies do you know?</Heading>
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
      {!submitted && (
        <Button
          colorScheme="blue"
          variant="outline"
          className="button"
          onClick={setSubmitted(true)}
        >
          Check
        </Button>
      )}
      {submitted && (
        <Button
          width={[100, 200, 350]}
          size="lg"
          colorScheme="blue"
          onClick={() => props.handleMiniGame(answer)}
        >
          Next
        </Button>
      )}
    </div>
  );
}
export default MiniGameTechnologies;

import "./style/Form.css";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Box, Heading, Radio, RadioGroup } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

class EducationForm extends React.Component {
  render() {
    return (
      <Box w={[500, 1000]} className="form">
        <Select
          name="university"
          placeholder="University"
          onChange={(event) => this.props.handleChange(event)}
        >
          <option value="University of Warsaw">University of Warsaw</option>
          <option value="Warsaw University of Technology">
            Warsaw University of Technology
          </option>
        </Select>
        <Select
          name="field"
          placeholder="Field of studies"
          onChange={(event) => this.props.handleChange(event)}
        >
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Engineering">Engineering</option>
          <option value="Engineering">Other</option>
        </Select>
        <Select
          name="degree"
          placeholder="Degree"
          onChange={(event) => this.props.handleChange(event)}
        >
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="Doctorate">Doctorate</option>
        </Select>
        <Heading size="sm">Graduation month and year</Heading>
        <Stack shouldWrapChildren direction="column">
          <NumberInput
            min={1}
            max={12}
            onChange={(event) => this.props.handleNumber("grad_month", event)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput
            min={2020}
            onChange={(event) => this.props.handleNumber("grad_year", event)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>
        <Heading size="sm">Do you plan further education?</Heading>
        <RadioGroup
          onChange={(event) =>
            this.props.handleNumber("further_education", event)
          }
        >
          <Stack spacing={5} direction="row">
            <Radio colorScheme="green" value="Yes">
              Yes
            </Radio>
            <Radio colorScheme="red" value="No">
              No
            </Radio>
          </Stack>
        </RadioGroup>
        <Button
          width={[100, 200, 350]}
          size="lg"
          colorScheme="blue"
          onClick={() => this.props.validateEducationForm()}
        >
          Next
        </Button>
      </Box>
    );
  }
}

export default EducationForm;

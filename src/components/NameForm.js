import "./style/Form.css";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

class NameForm extends React.Component {
  render() {
    return (
      <Box w={[500, 1000]} className="form">
        <Input
          name="first_name"
          width={[100, 200, 350]}
          color="blue.600"
          placeholder="First name"
          onChange={(event) => this.props.handleChange(event)}
        />
        <Input
          name="last_name"
          width={[100, 200, 350]}
          color="blue.600"
          placeholder="Last name"
          onChange={(event) => this.props.handleChange(event)}
        />
        <Button
          width={[100, 200, 350]}
          size="lg"
          colorScheme="blue"
          onClick={() => this.props.validateNameForm()}
        >
          Next
        </Button>
      </Box>
    );
  }
}

export default NameForm;

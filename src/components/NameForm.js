import "./style/Form.css";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

class NameForm extends React.Component {
  render() {
    return (
      <Box w={[500, 1000]} className="form">
        <Input
          width={[100, 200, 350]}
          color="blue.600"
          placeholder="First name"
          onChange={(event) => this.props.handleFirstName(event)}
        />
        <Input
          width={[100, 200, 350]}
          color="blue.600"
          placeholder="Last name"
          onChange={(event) => this.props.handleLastName(event)}
        />
        <Button
          width={[100, 200, 350]}
          size="lg"
          colorScheme="blue"
          onClick={() => this.props.handleNameForm()}
        >
          Next
        </Button>
      </Box>
    );
  }
}

export default NameForm;

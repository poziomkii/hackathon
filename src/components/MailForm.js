import "./style/Form.css";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

class MailForm extends React.Component {
  render() {
    return (
      <Box w={[500, 1000]} className="form">
        <Heading size="sm">
            Fill your email address to finish the application
        </Heading>
        <Input
          name="email"
          width={[200, 400, 700]}
          color="blue.600"
          placeholder="Email address"
          onChange={(event) => this.props.handleChange(event)}
        />
        <Select
            name="reason"
            placeholder="What convinced you to apply?"
            onChange={(event) => this.props.handleChange(event)}
            >
          <option value="Friends recommendation">Friends recommendation</option>
          <option value="University event">University event</option>
          <option value="Nice free gadgets">Nice free gadgets</option>
          <option value="Other">Other</option>
        </Select>
        <Button
          width={[100, 200, 350]}
          size="lg"
          colorScheme="blue"
          onClick={() => this.props.validateMailForm()}
        >
          Next
        </Button>
      </Box>
    );
  }
}

export default MailForm;

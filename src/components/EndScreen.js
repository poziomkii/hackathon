import React from "react";
import { Heading } from "@chakra-ui/react";

function EndScreen(props) {
  return (
    <div className="end-screen">
      <Heading>Your score: {props.score}</Heading>
      <Heading>Please reedem your prize at the stand.</Heading>
    </div>
  );
}

export default EndScreen;

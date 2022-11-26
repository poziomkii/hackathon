import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";

function EndScreen(props) {
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props.form),
    }
    fetch('/', requestOptions);
  });
  return (
    <div className="end-screen">
      <Heading>Your score: {props.score}</Heading>
      <Heading>Please reedem your prize at the stand.</Heading>
    </div>
  );
}

export default EndScreen;

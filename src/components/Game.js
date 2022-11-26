import './style/Game.css';
import React from "react";
import { Heading } from "@chakra-ui/react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="game">
        <Heading>Let's get to know each other :)</Heading>
        <div className="game-body">{/* body */}</div>
      </div>
    );
  }
}

export default Game;
import "./style/Game.css";
import React from "react";
import {
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

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
        <div className="game-progress">
          <CircularProgress size='3em' value={40} color="blue.400">
            <CircularProgressLabel className='progress-label'>40%</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    );
  }
}

export default Game;

import "./style/Game.css";
import Start from "./Start.js"
import React from "react";
import {
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import MiniGameCountries from "./MiniGameCountries";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
    };
  }

  nextStage() {
    this.setState({
      stage: this.state.stage + 1,
    })
  }

  render() {
    const stages = [
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
    ]
    return (
      <div className="game">
        <Heading as='h4' size='md'>Let's get to know each other :)</Heading>
        <div className="game-body">
          {stages[this.state.stage]()}
        </div>
        <div className="game-progress">
          <CircularProgress size='3em' value={40} color="blue.600">
            <CircularProgressLabel className='progress-label'>40%</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    );
  }
}

export default Game;

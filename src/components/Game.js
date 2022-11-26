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
        <Heading>Let's get to know each other :)</Heading>
        <div className="game-body">
          {/* body */}
        </div>
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

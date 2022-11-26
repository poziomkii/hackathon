import './style/Game.css';
import React from "react";
import { Heading } from "@chakra-ui/react";
import Start from "./Start.js"

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
        <div className="game-body">{stages[this.state.stage]()}</div>
      </div>
    );
  }
}

export default Game;
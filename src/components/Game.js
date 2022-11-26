import "./style/Game.css";
import Start from "./StartScreen.js"
import React from "react";
import {
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import MiniGameWhatIsGS from "./MiniGameWhatIsGS";
import MiniGameCountries from "./MiniGameCountries";
import MiniGameColor from "./MiniGameColor";
import MiniGameTechnologies from "./MiniGameTechnologies";
import EndScreen from "./EndScreen";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      max_stage_num: 10,
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
      // imię nazwisko formularz
      () => <MiniGameWhatIsGS stage={this.state.stage} onClick={() => this.nextStage()}></MiniGameWhatIsGS>,
      // wykształcenie formularz
      () => <MiniGameCountries stage={this.state.stage} onClick={() => this.nextStage()}></MiniGameCountries>,
      // metryczka formularz
      () => <MiniGameColor stage={this.state.stage} onClick={() => this.nextStage()}></MiniGameColor>,
      // mail formularz
      () => <MiniGameTechnologies stage={this.state.stage} onClick={() => this.nextStage()}></MiniGameTechnologies>,
      // submit
      //wynik
      () => <EndScreen stage={this.state.stage} onClick={() => this.nextStage()}></EndScreen>,
    ]
    return (
      <div className="game">
        <Heading as='h4' size='md'>Let's get to know each other :)</Heading>
        <div className="game-body">
          {stages[this.state.stage]()}
        </div>
        <div className="game-progress">
          <CircularProgress size='3em' value={this.state.stage / this.state.max_stage_num} color="blue.600">
            <CircularProgressLabel className='progress-label'>{this.state.stage / this.state.max_stage_num}%</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    );
  }
}

export default Game;

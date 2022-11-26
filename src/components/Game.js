import "./style/Game.css";
import StartScreen from "./StartScreen.js"
import NameForm from "./NameForm.js";
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
      score: 0,
      form: {
        first_name: "",
        last_name: "",
      }
    };
  }

  nextStage() {
    this.setState({
      stage: this.state.stage + 1,
    })
  }

  render() {
    const stages = [
      () => <StartScreen stage={this.state.stage} onClick={() => this.nextStage()}></StartScreen>,
      () => <NameForm
        handleFirstName={(event) => this.handleFirstName(event)}
        handleLastName={(event) => this.handleLastName(event)}
        handleNameForm={() => this.handleNameForm()}
      />,
      () => <MiniGameWhatIsGS handleMiniGame={() => this.nextStage()}></MiniGameWhatIsGS>,
      // wykształcenie formularz
      () => <MiniGameCountries handleMiniGame={() => this.nextStage()}></MiniGameCountries>,
      // metryczka formularz
      () => <MiniGameColor handleMiniGame={(delta) => {this.setState({...this.state, score: this.state.score + delta}, this.nextStage)}}></ MiniGameColor>,
      // mail formularz
      () => <MiniGameTechnologies handleMiniGame={() => this.nextStage()}></MiniGameTechnologies>,
      // submit
      //wynik
      () => <EndScreen score={this.state.score}></EndScreen>,
    ]

    const progressPercentage = Math.floor((this.state.stage) / (stages.length - 1) * 100)
    return (
      <div className="game">
        <Heading as='h4' size='md'>Let's get to know each other :)</Heading>
        <div className="game-body">
          {stages[this.state.stage]()}
        </div>
        <div className="game-progress">
          <CircularProgress size='3em' value={progressPercentage} color="blue.600">
            <CircularProgressLabel className='progress-label'>{progressPercentage}%</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div >
    );
  }

  handleFirstName(event) {
    const stage = this.state.stage;
    const form = this.state.form;
    form.first_name = event.target.value;
    this.setState({
      stage: stage,
      form: form,
    });
  }
  handleLastName(event) {
    const stage = this.state.stage;
    const form = this.state.form;
    form.last_name = event.target.value;
    this.setState({
      stage: stage,
      form: form,
    });
  }
  handleNameForm() {
    if ((!this.state.form.first_name) || (!this.state.form.last_name)) {
      alert("Please fill the form properly!");
      return;
    }
    this.nextStage();
  }
}

export default Game;

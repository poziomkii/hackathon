import "./style/Game.css";
import Start from "./Start.js"
import NameForm from "./NameForm.js";
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
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
      () => <NameForm
          handleFirstName={(event) => this.handleFirstName(event)}
          handleLastName={(event) => this.handleLastName(event)} 
          handleNameForm={() => this.handleNameForm()}
          />,
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
      () => <Start stage={this.state.stage} onClick={() => this.nextStage()}></Start>,
    ]
    return (
      <div className="game">
        <Heading>Let's get to know each other :)</Heading>
        <div className="game-body">
          {stages[this.state.stage]()}
        </div>
        <div className="game-progress">
          <CircularProgress size='3em' value={40} color="blue.400">
            <CircularProgressLabel className='progress-label'>40%</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
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

import "./style/Game.css";
import Start from "./Start.js"
import NameForm from "./NameForm.js";
import EducationForm from "./EducationForm.js";
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
        first_name: null,
        last_name: null,
        university: null,
        field: null,
        degree: null,
        grad_month: null,
        grad_year: null,
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
        handleChange={(event) => this.handleChange(event)}
        validateNameForm={() => this.validateNameForm()}
      />,
      () => <EducationForm
        handleChange={(event) => this.handleChange(event)}
        handleNumber={(name, event) => this.handleNumber(name, event)}
        validateEducationForm={() => this.validateEducationForm()}
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

  handleNumber(name, event) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: event,
      }
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    });
  } 

  validateNameForm() {
    if (!(this.state.form.first_name && this.state.form.last_name)) {
      alert("Please fill the form properly!");
      return;
    }
    this.nextStage();
  }
  validateEducationForm() {
    if (!(this.state.form.university && this.state.form.field
      && this.state.form.degree && this.state.form.grad_month
      && this.state.form.grad_year)) {
      alert("Please fill the form properly!");
      return;
    }
    this.nextStage();
  }

}

export default Game;

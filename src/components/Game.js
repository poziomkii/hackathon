import "./style/Game.css";
import StartScreen from "./StartScreen.js"
import NameForm from "./NameForm.js";
import EducationForm from "./EducationForm.js";
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
import MetricsForm from "./MetricsForm";
import MailForm from "./MailForm"

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      score: 0,
      form: {
        first_name: null,
        last_name: null,
        university: null,
        field: null,
        degree: null,
        grad_month: null,
        grad_year: null,
        further_education: null,
        gender: null,
        ethnicity: null,
        email: null,
        reason: null,
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
        handleChange={(event) => this.handleChange(event)}
        validateNameForm={() => this.validateNameForm()}
      />,
      () => <MiniGameWhatIsGS stage={this.state.stage} handleMiniGame={(delta) => this.nextStageScored(delta)}></MiniGameWhatIsGS>,
      () => <EducationForm
        handleChange={(event) => this.handleChange(event)}
        handleNumber={(name, event) => this.handleNumber(name, event)}
        validateEducationForm={() => this.validateEducationForm()}
      />,
      () => <MiniGameCountries stage={this.state.stage} handleMiniGame={(delta) => this.nextStageScored(delta)}></MiniGameCountries>,
      () => <MetricsForm
        handleChange={(event) => this.handleChange(event)}
        validateMetricsForm={() => this.validateMetricsForm()}
      />,
      () => <MiniGameColor handleMiniGame={(delta) => { this.nextStageScored(delta) }} />,
      () => <MailForm
        handleChange={(event) => this.handleChange(event)}
        validateMailForm={() => this.validateMailForm()}
      />,
      () => <MiniGameTechnologies handleMiniGame={(techs, delta) => { this.setState({ ...this.state, technologies: techs }, this.nextStageScored(delta)) }}></MiniGameTechnologies>,
      // mail + submit
      () => <EndScreen form={this.state} score={this.state.score}></EndScreen>,
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

  handleNumber(name, event) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: event,
      }
    });
  }

  nextStageScored(delta) {
    this.setState({ ...this.state, score: this.state.score + delta }, this.nextStage);
  }

  handleChange(event) {
    console.log(event);
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

  validateMetricsForm() {
    if (!(this.state.form.gender && this.state.form.ethnicity)) {
      alert("Please fill the form properly!");
      return;
    }
    this.nextStage();
  }

  validateMailForm() {
    if (!(this.state.form.email && this.state.form.reason)) {
      alert("Please fill the form properly!");
      return;
    }
    this.nextStage();
  }
}

export default Game;

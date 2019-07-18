import React from 'react';
import './styles/index.scss';
import { Destination, CalculationResult } from './types';
import { Calculate } from './calculate-route';
import { convertResultToStringArray, destinations } from './utils';

interface ComponentProps {}

interface LocalState {
  siteA?: Destination;
  siteB?: Destination;
  result?: CalculationResult[];
  validationMessage?: string;
}

export class App extends React.Component<ComponentProps, LocalState> {
  
  constructor(props: ComponentProps) {
    super(props);
    this.state = {};
    this.updateInputA = this.updateInputA.bind(this);
    this.updateInputB = this.updateInputB.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  updateInputA(e: React.ChangeEvent<HTMLSelectElement>): void {
    const siteA = e.target.value as Destination;
    this.setState({ siteA, validationMessage: undefined });
  }
  
  updateInputB(e: React.ChangeEvent<HTMLSelectElement>): void {
    const siteB = e.target.value as Destination;
    this.setState({ siteB, validationMessage: undefined });
  }

  renderSelectOptions(): JSX.Element {
    return <React.Fragment>
      <option key={"empty"}></option>
      {destinations.map(d => <option key={d} value={d}>{d}</option>)}
    </React.Fragment>
  }

  // Would prefer this to be seperate and set in reducer rather than local state
  validate() {
    const { siteA, siteB } = this.state;
    const bothSelected = siteA && siteB

    // If one field is empty
    if (!bothSelected) {
      const validationMessage = "Both fields must be filled to find a path";
      this.setState({ validationMessage, result: undefined });
      return false;
    }

    // If both fields are the same
    if (bothSelected && siteA === siteB) {
      const validationMessage = "Please select two different destinations";
      this.setState({ validationMessage, result: undefined });
      return false;
    }

    // Valid
    return true;
  }

  calculate(): void {
    const { siteA, siteB } = this.state;
    const isValid = this.validate();
    if (isValid) {
      const result = Calculate(siteA!, siteB!);
      this.setState({ result: convertResultToStringArray(result) });
    }
  }

  // Some people prefer without the if and instead use turnary operator in render
  // validationMessage ? renderValidationMessage() : null... I prefer less in render func
  renderValidationMessage(): JSX.Element | null {
    const { validationMessage } = this.state;
    if (validationMessage) {
      return <p className="warning-text">{validationMessage}</p>;
    }
    return null;
  }

  renderResultText(): JSX.Element | null {
    const { result } = this.state;

    // Default text to tell user what to do
    if (!result) {
      return <p className="centered-text">Select two destinations and press the calculate button to find the best route between them.</p>;
    } 

    // If no path is found (don't think this exists in mock data?)
    if (result.length < 1) {
      return <p className="centered-text">There are no possible paths between these destinations</p>
    }

    // Results if calculated successfully 
    return <React.Fragment>{result.map(r => <p key={r.id}>{r.details}</p>)}</React.Fragment>;
  }

  render() {
    const { siteA, siteB } = this.state;
    return (
      <div id="pathfinder-container">
        <div id="header">Pathfinder</div>
        <div id="body">
          <div className="route-picker-container">
            <select className="route-picker" value={siteA} onChange={this.updateInputA}>
              {this.renderSelectOptions()}
            </select>
            <select className="route-picker" value={siteB} onChange={this.updateInputB}>
              {this.renderSelectOptions()}
            </select>
          </div>
          <div id="calculate-button-container">
            <button onClick={this.calculate}>Calculate</button>
          </div>
          {this.renderValidationMessage()}
          <div id="result-field-container">
            {this.renderResultText()}
          </div>
        </div>
      </div>
    );
  }
}

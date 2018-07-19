import React, { Component } from "react";
import "./App.css";
import Input from "./components/Layout/InputContainer/input";
import Quote from "./components/Layout/QuoteContainer/quote";

import {
  DEFAULT_COUNTRY_CODE,
  DEFAULT_FROM_CURRENCY,
  DEFAULT_TO_CURRENCY,
  DEFAULT_AMOUNT
} from "./utils/constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: DEFAULT_COUNTRY_CODE,
      phoneNumber: "",
      fromCurrency: DEFAULT_FROM_CURRENCY,
      toCurrency: DEFAULT_TO_CURRENCY,
      amount: DEFAULT_AMOUNT
    };

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleGetQuoteClick = this.handleGetQuoteClick.bind(this);
  }

  handleFormInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleGetQuoteClick(e) {
    e.preventDefault();
    console.log("state000=", this.state);
  }

  render() {
    console.log("state001=", this.state);
    return (
      <div className="capture container row">
        <Input
          formState={this.state}
          onGetQuoteClick={this.handleGetQuoteClick}
          onFormInputChange={this.handleFormInputChange}
        />
        <Quote />
      </div>
    );
  }
}

export default App;

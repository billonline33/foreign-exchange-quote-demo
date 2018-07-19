import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";
import Input from "./components/Layout/InputContainer/input";
import Quote from "./components/Layout/QuoteContainer/quote";
import { loadQuote, resetQuote } from "./reducers/inputReducer";

import {
  DEFAULT_COUNTRY_CODE,
  DEFAULT_FROM_CURRENCY,
  DEFAULT_TO_CURRENCY,
  DEFAULT_AMOUNT
} from "./utils/constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: DEFAULT_COUNTRY_CODE,
      phoneNumber: "",
      fromCurrency: DEFAULT_FROM_CURRENCY,
      toCurrency: DEFAULT_TO_CURRENCY,
      amount: DEFAULT_AMOUNT
    };

    this.state = this.initialState;

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleGetQuoteClick = this.handleGetQuoteClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  /* whenever an input box is changed, update the state value, note we use [name] for all input here  */
  handleFormInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  /* call reducer */
  handleGetQuoteClick(e) {
    e.preventDefault();

    this.props.loadQuote(
      this.state.fromCurrency,
      this.state.toCurrency,
      this.state.amount
    );
  }

  /* Callback - when start new quote button is clicked, clear both left panel and right panel data*/
  resetForm() {
    this.setState(this.initialState);
    this.props.resetQuote();
  }

  render() {
    return (
      <div className="capture container row">
        {/* This is left panel of the screen - capture information */}
        <Input
          formState={this.state}
          onGetQuoteClick={this.handleGetQuoteClick}
          onFormInputChange={this.handleFormInputChange}
        />
        {/* This is the right panel of the screen - display quote */}
        <Quote onStartNewQuoteClick={this.resetForm} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadQuote, resetQuote }, dispatch);

App = connect(
  null,
  mapDispatchToProps
)(App);
export default App;

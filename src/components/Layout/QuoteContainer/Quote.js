import React, { Component } from "react";
import { connect } from "react-redux";

class Quote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props.fromCurrency=", this.props.fromCurrency);
    console.log("this.props.customerAmount", this.props.customerAmount);
    return (
      <div className="rate col-12 col-md-6">
        <h1>Quick Quote</h1>
        <div className="rate_content">
          <div className="rate_container">
            <p>OFX Customer Rate:</p>
            <h3>{this.props.customerRate}&nbsp;</h3>
            <p>From</p>
            <h4>
              {this.props.fromCurrency}{" "}
              <span>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: this.props.fromCurrency
                }).format(this.props.amount)}
              </span>
            </h4>
            <p>To</p>
            <h4>
              {this.props.toCurrency}&nbsp;
              <span>
                {this.props.customerAmount == null
                  ? ""
                  : new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: this.props.toCurrency
                    }).format(this.props.customerAmount)}
              </span>
            </h4>
            <div className="text-center">
              <button
                type="submit"
                className="btn "
                onClick={this.props.onStartNewQuoteClick}
              >
                Start New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerRate: state.inputReducer.newQuote.CustomerRate,
  customerAmount: state.inputReducer.newQuote.CustomerAmount,
  fromCurrency: state.inputReducer.fromCurrency,
  toCurrency: state.inputReducer.toCurrency,
  amount: state.inputReducer.amount
});

Quote = connect(
  mapStateToProps,
  null
)(Quote);

export default Quote;

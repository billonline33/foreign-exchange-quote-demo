import React, { Component } from "react";

class input extends Component {
  render() {
    const formState = this.props.formState;

    {
      /* validation: enable "get quote" button when below fields pass validation */
    }
    const isEnabled =
      formState.firstName.length > 0 &&
      formState.lastName.length > 0 &&
      formState.amount > 200;

    return (
      <div className="rateForm col-12 col-md-6">
        <h1>Quick Quote</h1>
        <form className="rateForm_form">
          <div className="rateForm_form_top">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  First Name <span>*</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  value={formState.firstName}
                  onChange={this.props.onFormInputChange}
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label>
                  Last Name <span>*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  value={formState.lastName}
                  onChange={this.props.onFormInputChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={formState.email}
                onChange={this.props.onFormInputChange}
                placeholder="Email"
              />
            </div>
            <div className="form-row phone-number">
              <div className="form-group col-4 col-sm-3 col-md-3 col-lg-2">
                <select
                  className="form-control"
                  name="countryCode"
                  onChange={this.props.onFormInputChange}
                >
                  {/* hard code value to simplify the issue */}
                  <option value="+61" selected>
                    +61
                  </option>
                  <option value="+61">+61</option>
                  <option value="+91">+91</option>
                  <option value="+86">+86</option>
                </select>
              </div>
              <div className="form-group col-8 col-sm-9 col-md-9 col-lg-10">
                <input
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  value={formState.phoneNumber}
                  onChange={this.props.onFormInputChange}
                  placeholder="Enter your phone"
                />
              </div>
            </div>
          </div>

          <div className="rateForm_form__bottom">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  From Currency <span>*</span>
                </label>
                <select
                  className="form-control"
                  name="fromCurrency"
                  onChange={this.props.onFormInputChange}
                >
                  {/* hard code value to simplify the issue */}
                  <option value="USD" selected>
                    United States Dollar (USD)
                  </option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="JPY">Japanese Yen (JPY)</option>
                  <option value="AUD" selected>
                    Australian Dollar (AUD)
                  </option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>
                  To Currency <span>*</span>
                </label>
                <select
                  className="form-control"
                  name="toCurrency"
                  onChange={this.props.onFormInputChange}
                >
                  {/* hard code value to simplify the issue */}
                  <option value="USD" selected>
                    United States Dollar (USD)
                  </option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="JPY">Japanese Yen (JPY)</option>
                  <option value="AUD">Australian Dollar (AUD)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  Amount <span>*</span>
                </label>
                <input
                  name="amount"
                  type="text"
                  className="form-control"
                  value={formState.amount}
                  onChange={this.props.onFormInputChange}
                />
              </div>
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn"
                disabled={!isEnabled}
                onClick={this.props.onGetQuoteClick}
              >
                Get Quote
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default input;

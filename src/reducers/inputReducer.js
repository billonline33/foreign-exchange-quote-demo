import axios from "axios";
import { WEBAPIURL } from "../utils/constants";
import {
  DEFAULT_FROM_CURRENCY,
  DEFAULT_TO_CURRENCY,
  DEFAULT_AMOUNT
} from "../utils/constants";

const GET_QUOTE = "inputReducer/GET_QUOTE";
const REQUEST_FAILED = "inputReducer/REQUEST_FAILED";
const RESET_QUOTE = "inputReducer/RESET_QUOTE";

const initialState = {
  newQuote: {}
};

const getQuoteFromWebService = (fromCurrency, toCurrency, amount) => {
  let apiUrl = `${WEBAPIURL}/${fromCurrency}/${toCurrency}/${amount}?format=json`;
  return axios.get(apiUrl);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        newQuote: action.newQuote
      };

    case RESET_QUOTE: {
      console.log("REST-QUOTE 002 fired");
      return { ...state, newQuote: {} };
    }

    case REQUEST_FAILED: {
      /* ToDo: BillH - handle failed request here*/
      return state;
    }

    default:
      return state;
  }
};

export const resetQuote = () => {
  console.log("resetQuote 001");
  return dispatch => {
    dispatch({
      type: RESET_QUOTE
    });
  };
};

export const loadQuote = (fromCurrency, toCurrency, amount) => {
  return dispatch => {
    getQuoteFromWebService(fromCurrency, toCurrency, amount)
      .then(response => {
        console.log("0000", response.data.CustomerRate);
        dispatch({
          type: GET_QUOTE,
          newQuote: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_FAILED,
          error
        });
      });
  };
};

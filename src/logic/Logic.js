

import Calculate from './Calculate'
import IsNumber from './IsNumber'
/*
 * Given a button id and an action return an updated state object.
 *
 * Logic data object contains:
 *   total:String         the running total
 *   current:String       the current number to be operated on with the total
 *   action:String        +, -, *, /, =  etc.
 */

const Logic = (state, buttonid) => {

  if (buttonid === "AC") {

    // ALL Clear

    return {
      total: null,
      current: null,
      action: null
    }
  }

  if (IsNumber(buttonid)) {
    if (buttonid === "0" && state.current === "0") {
      return { state }
    }

    // If an action is present, then concatinate the buttonid number to state.current

    if (state.action) {
      if (state.current) {
        return { current: state.current + buttonid }
      }
      return { current: buttonid }
    }

    // If there isn't an action, then add number to the state.total

    if (state.current) {
      return { current: state.current + buttonid }
    }
    return { current: buttonid }

  }
  else {

    // Not a number
    // Must be an action key(+*/-) or a '.', '+/-',  '%' or '='

    if (buttonid === '.') {

      // Add decimal point only if current does not already have one.
      if (state.current) {
        if (state.current.includes(".")) {
          return { state };
        }
        //console.log(">>", state.current + ".");
        return {
          current: state.current + "."
        }
      }
      else {
        return { current: "0." }
      }
    }
    else if (buttonid === "+/-") {

      // Switch the negativity

      if (state.current) {
        if (state.current.startsWith("-")) {

          // remove the '-' from the start of the current number
          return { current: state.current.substr(1) }
        }
        else {
          return { current: "-" + state.current }
        }
      }

      if (state.total) {
        if (state.total.startsWith("-")) {

          // remove the '-' from the start of the current number
          return { total: state.total.substr(1) }
        }
        else {
          return { total: "-" + state.total }
        }
      }

    }
    else if (buttonid === "=") {
      const result = Calculate(state);
      console.log("Result:", result);
      return {
        total: Calculate(state),
        current: null,
        action: null
      }
    }
    else {

      // buttonid is an operator action (+-/*)
      // 1) If there is an existing operator action then perform the calculation
      // 2) If there is an existing current value, then move this into total and save the operator action
      //     make current = null
      // 3) If there is not an existing current value, then simple store the operator action

      if (state.action) {    // 1)
        const result = Calculate(state);
        console.log("Result:", result);
        return {
          total: Calculate(state),
          current: null,
          action: buttonid
        }
      }
      else if (state.current)    // 2)
        return {
          total: state.current,
          current: null,
          action: buttonid
        }
      else {                // 3)
        return {
          action: buttonid
        }
      }
    }
  }
}

export default Logic
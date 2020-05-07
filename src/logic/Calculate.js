

const Calculate = (state) => {

  const firstNum = state.total || "0";
  const secondNum = state.current || "0"

  let result = 0;

  switch (state.action) {
    case "+":
      //console.log(":::", state);
      result = Number(firstNum) + Number(secondNum)
      break;
    case "-":
      result = Number(firstNum) - Number(secondNum)
      break;
    case "x":
      result = Number(firstNum) * Number(secondNum)
      break;
    case "/":
      if (Number(secondNum) > 0) {
        result = Number(firstNum) / Number(secondNum)
      }
      else {
        result = "divide by zero"
      }
      break;
    default:
      break;
  }
  return result.toString();
}

export default Calculate


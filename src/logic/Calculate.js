

const Calculate = (state) => {

  const firstNum = Number(state.total || "0");
  const secondNum = Number(state.current || "0");

  let result = 0;

  switch (state.action) {
    case "+":
      //console.log(":::", state);
      result = firstNum + secondNum
      break;
    case "-":
      result = firstNum - secondNum
      break;
    case "x":
      result = firstNum * secondNum
      break;
    case "/":
      if (secondNum > 0) {
        result = firstNum / secondNum
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


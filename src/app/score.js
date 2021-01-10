import conditions from "./conditions";
import _ from "lodash";
const score = (function () {
  function calculate(stateArr) {
    const isMatchedOdd = stateArr.every((item) => item % 2 === 1);
    const isMatchedEven = stateArr.every((item) => item % 2 === 0);
    if (!isMatchedEven && !isMatchedOdd)
      return {
        matched: false,
        message: "No Match!You Lost 100 Score!",
        score: -100,
      };
    stateArr.sort(function (a, b) {
      return b - a;
    });
    const matchedState = isMatchedOdd ? "oddStates" : "evenStates";

    for (let i = 0; conditions.states[matchedState].length; i++) {
      const condition = conditions.states[matchedState][i];
      if (_.isEqual(condition.condition, stateArr))
        return {
          matched: true,
          message: `Great Job! You Have Got ${condition.score} Score! Go On`,
          score: condition.score,
        };
      else
        return {
          matched: false,
          message: "No Match!You Lost 100 Score!",
          score: -100,
        };
    }
    return {
      matched: false,
      message: "Something Went Wrong, Please Try Again!",
      score: 0,
    };
  }
  return {
    calculate,
  };
})();
export default score;

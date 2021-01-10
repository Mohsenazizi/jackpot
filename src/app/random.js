import constants from "./constants";
const random = (function () {
  function generate() {
    return Math.floor(Math.random() * (constants.colItemsCount * 2));
  }
  return {
    generate,
  };
})();

export default random;

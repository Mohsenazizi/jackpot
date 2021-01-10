const conditions = (function () {
  const states = {
    oddStates: [
      {
        condition: [1, 1, 1],
        score: 60,
      },
      {
        condition: [3, 3, 3],
        score: 30,
      },
      {},

      {
        condition: [7, 7, 7],
        score: 2150,
      },
      {
        condition: [9, 9, 9],
        score: 4050,
      },
      {
        condition: [5, 5, 5],
        score: 170,
      },
      {
        condition: [7, 5, 5],
        score: 75,
      },
      {
        condition: [7, 7, 5],
        score: 75,
      },
      {
        condition: [9, 9, 7],
        score: 75,
      },
    ],
    evenStates: [
      {
        condition: [0, 0, 0],
        score: 50,
      },
      {
        condition: [8, 8, 8],
        score: 1000,
      },
      {
        condition: [6, 6, 6],
        score: 150,
      },
      {
        condition: [8, 6, 6],
        score: 75,
      },
      {
        condition: [8, 8, 6],
        score: 75,
      },
      {
        condition: [4, 4, 4],
        score: 20,
      },
      {
        condition: [2, 2, 2],
        score: 10,
      },
    ],
  };
  return {
    states,
  };
})();
export default conditions;

var letterCombinations = function (digits) {
  const state = new Map();
  state.set("1", null),
    state.set("2", ["a", "b", "c"]),
    state.set("3", ["d", "e", "f"]),
    state.set("4", ["g", "h", "i"]),
    state.set("5", ["j", "k", "l"]),
    state.set("6", ["m", "n", "o"]),
    state.set("7", ["p", "q", "r", "s"]),
    state.set("8", ["t", "u", "v"]),
    state.set("9", ["w", "x", "y", "z"]);

  if (digits.length === 0) {
    return [];
  }
  if (digits.length === 1) {
    return state.get(digits);
  }

  if (digits.length > 1) {
    let game = [];
    for (let i = 0; i < digits.length; i++) {
      // console.log("digits", digits[i]);
      game.push(state.get(digits[i]));
    }
    console.log("game", game);
    let ans = [];
    for (let j = 0; j < game.length; j++) {
      for (let w = 0; w < game[j].length; w++) {
        console.log("j", game[j]);
        for (let k = 0; k < game[j + 1]; k++) {
          ans.push(game[j][w] + game[j][k]);
        }
      }
    }
    console.log("answerrr", ans);
  }
};

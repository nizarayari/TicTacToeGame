
const TicTacToe = (() => {
  
  let rows, columns, diagonals, state
  let winner = 0
  //reorganize data
  const init = function (data) {
    winner = 0
    organizeData(data);
    return this;
  }

  const organizeData = (data) => {
    state = data
    rows = state;
    columns = [[],[],[]];
    diagonals = [[],[]];

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        columns[j][i] = data[i][j]
        if (i === 0) { diagonals[i][j] = data[j][j] }
        if (i === 2) { diagonals[i-1][j] = data[j][i-j] } 
      }
    }
  }


  //check lines
  const checkLines = (data) => {
    const checker = data.map((line) => {
      if (line.join('') === "XXX") {
        // user wins
        winner = -1;
        return true;
      } else if (line.join('') === "OOO"){
        // computer wins
        winner = 1;
        return true; 
      } else {
        return false;
      }
    })

    if(checker.includes(true)){
      return true
    }

    return false;

  }

  const isWinner = () => {
    // if there is a winner
    if (checkLines(rows) || checkLines(columns) || checkLines(diagonals)){
      return winner
    } else {
      state.forEach((line)=>{
        if(line.includes(null)){
          //the game is not finish yet
          winner = null;
        }

      })
    }
    
    return winner
    
  } 


return {
  init,
  isWinner
}

})();

export default TicTacToe


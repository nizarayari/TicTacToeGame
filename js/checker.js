
const TicTacToe = (() => {
  
  let rows, columns, diagonals, state
  let computerUtility = 0

  const init = function (data) {
    computerUtility = 0
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


  const lineHasWinner = (data) => {
    const winnerState = data.map((line) => {
      if (line.join('') === "XXX") {
        computerUtility = -1;
        return true;
      } else if (line.join('') === "OOO"){
        computerUtility = 1;
        return true; 
      } else {
        return false;
      }
    })
    return checkLines(winnerState)
  }

  const checkLines = (state) => {
    if(state.includes(true)){
      return true
    }
    return false;
  }

  const isWinner = () => {
    if (lineHasWinner(rows) || lineHasWinner(columns) || lineHasWinner(diagonals)){
      return computerUtility
    } else {
      state.forEach((line)=>{
        if(line.includes(null)){
          computerUtility = null;
        }

      })
    }
    
    return computerUtility
    
  } 


return {
  init,
  isWinner
}

})();

export default TicTacToe


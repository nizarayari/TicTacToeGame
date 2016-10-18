
const TicTacToe = (() => {
  
  let rows, columns, diagonals, state, allLines
  let computerUtility = 0

  const init = function (data) {
    state = data
    computerUtility = 0
    organizeData(data);
    return this;
  }

  const organizeData = (data) => {
    rows = data;
    columns = [[],[],[]];
    diagonals = [[],[]];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        columns[j][i] = data[i][j]
        if (i === 0) { diagonals[i][j] = data[j][j] }
        if (i === 2) { diagonals[i-1][j] = data[j][i-j] } 
      }
    }
    allLines = [rows, columns, diagonals]
  }

  const lineHasWinner = (data) => {
    let computerMarker = 'O';
    let userMarker = 'X';

    data.forEach((line) => {
      if(line.filter((cell) => {return cell === userMarker }).length === 3){
        computerUtility = -1;
      }
      if(line.filter((cell) => {return cell === computerMarker }).length === 3){
        computerUtility = 1;
      }
    })
  }

  const getWinner = () => {
    allLines.forEach(lines => { lineHasWinner(lines) })

    if(computerUtility === 1 || computerUtility === -1) {
      return computerUtility
    } else {
      state.forEach((line)=>{
        if(line.includes(null)){
          computerUtility = null;
        }
      })
    }

    return computerUtility;

  }

return {
  init,
  getWinner
}

})();

export default TicTacToe


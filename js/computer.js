import TicTacToe from './checker.js'

const Computer = (() => {

  //Using miniMAx algorithm to determine the most efficient computer choice
  const miniMax = (grid, turn) => {
    let col,row
    let winner = TicTacToe.init(grid).getWinner()
    // currTurn is applied to the grid using 0 for computer and 1 for user
    let currTurn = turn === true ? 'O' : 'X'
    if(winner !== null){
      if (winner === 1){ return [winner,grid] } //computer wins
      if (winner === 0){ return [winner,grid] } //Equals
      if (winner === -1){ return [winner,grid] } // user wins
    } else {
      //if game not finished yet
      var nextUtility = null;
      var nextGrid = null;

      grid.forEach((lines,i) => {
        lines.forEach((item,j) => {
          if (grid[i][j] === null) {
              grid[i][j] = currTurn;
              let utility = miniMax(grid, !turn)[0];
              // computer maximize its utility
              let maxUtility = turn && (nextUtility == null || utility > nextUtility)
              // computer minimize user's utility
              let minMinUtility = !turn && (nextUtility == null || utility < nextUtility)
              if ( maxUtility || minMinUtility) {
                  nextGrid = grid.map((lines) => { return lines.slice() });
                  nextUtility = utility;
                  col = j 
                  row = i
              }
              grid[i][j] = null;
          }
        })
      })

      return [nextUtility, nextGrid,col,row]
    }

  }


return {
  miniMax
}

})();

export default Computer
 
import TicTacToe from './checker.js'

const Computer = (() => {


  const miniMax = (grid, turn) => {
    let col,row
    let winner = TicTacToe.init(grid).getWinner()
    
    let currTurn = turn === true ? 'O' : 'X'
    if(winner !== null){
      if (winner === 1){ return [winner,grid] } 
      if (winner === 0){ return [winner,grid] } 
      if (winner === -1){ return [winner,grid] } 
    } else {
      
      var nextUtility = null;
      var nextGrid = null;

      grid.forEach((lines,i) => {
        lines.forEach((item,j) => {
          if (grid[i][j] === null) {
              grid[i][j] = currTurn;
              let utility = miniMax(grid, !turn)[0];
              let maxUtility = turn && (nextUtility == null || utility > nextUtility)
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
 
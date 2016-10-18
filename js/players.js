import TicTacToe from './checker'
import Computer from './computer'

const Players = (() => {

const computerChoice = (grid) => {
  let choice = Computer.miniMax(grid,true)
  return choice
}


const userChoice = (grid, squareLocation,userMarker) => {
  let col = Number(squareLocation[0])
  let row = Number(squareLocation[1])
  grid[row][col] = userMarker
  return grid
}

return {
  computerChoice,
  userChoice
}

})()

export default Players
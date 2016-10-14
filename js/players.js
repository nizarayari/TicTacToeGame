import TicTacToe from './checker'
import Computer from './computer'

const Players = (() => {

const newGame = (grid) => {
  grid = [
          [null,null,null],
          [null,null,null],
          [null,null,null]
         ]
  $('.cells').text('')
  $('#result').text('')

  return grid
}

const checkGameState = (grid) => {
  let getGameState = TicTacToe.init(grid).getWinner()
  if(getGameState != null){
    if(getGameState === 1) { $('#result').text('YOU JUST LOST THE GAME! - try it again ⬇') }
    if(getGameState === -1) { $('#result').text('YOU WIN - BUT IT NEVER GOING TO HAPPEN ANYWAY :)') }
    if(getGameState === 0) { $('#result').text('DRAW! - try it again ⬇ ') }
  }
}

const computerChoice = (grid) => {
  let choice = Computer.miniMax(grid,true)
  return applyChoice(choice)
}

const applyChoice = (choice) => {
  let board = choice[1]
  let computerMarker = 'O'
  $(`.cells[data-location=${choice[2]}${choice[3]}]`).text(computerMarker)
  return board
}

const userChoice = (grid, squareLocation,userMarker) => {
  let col = Number(squareLocation[0])
  let row = Number(squareLocation[1])
  grid[row][col] = userMarker
  return grid
}

return {
  newGame,
  checkGameState,
  computerChoice,
  userChoice
}

})()

export default Players
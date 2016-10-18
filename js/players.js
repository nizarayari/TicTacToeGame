import TicTacToe from './checker'
import Computer from './computer'

const Players = (() => {

const newGame = (grid) => {
  grid = [
          [null,null,null],
          [null,null,null],
          [null,null,null]
         ]

  let board = document.querySelectorAll('.cells')
  board.forEach((cell) => {
    cell.innerHTML = ''
  })
  document.querySelector('#result').innerHTML = ''

  return grid
}

const checkGameState = (grid) => {
  let getGameState = TicTacToe.init(grid).getWinner()

  if(getGameState != null){
    if(getGameState === 1) { document.querySelector('#result').innerHTML = 'YOU JUST LOST THE GAME! - try it again ⬇' }
    if(getGameState === -1) { document.querySelector('#result').innerHTML = 'YOU WIN - BUT IT NEVER GOING TO HAPPEN ANYWAY :)' }
    if(getGameState === 0) { document.querySelector('#result').innerHTML = 'DRAW! - try it again ⬇ ' }
  }
}

const computerChoice = (grid) => {
  let choice = Computer.miniMax(grid,true)
  return applyChoice(choice)
}

const applyChoice = (choice) => {
  let board = choice[1]
  let computerMarker = 'O'
  if (choice[2] !== undefined){
  document.querySelector("div[data-location="+"\""+choice[2]+choice[3]+"\""+"]").innerHTML = 'O'
  }
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
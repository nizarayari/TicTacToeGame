import { expect } from 'chai'
import TicTacToe from '../js/checker'
import Computer from '../js/computer'


describe('TicTacToe checker method',() => {
  it('should returns null if the game is not done yet',() => {
    let board = [
                  ['E',1,0],
                  [1,0,1],
                  [1,0,1]
    ]
    expect(TicTacToe.init(board).getWinner()).to.equal(null)
  })

  it('should returns 1 if the computer wins',() => {
    let board = [
                  [1,0,1],
                  ['E',0,'E'],
                  [1,0,'E']
    ]
    expect(TicTacToe.init(board).getWinner()).to.equal(1)
  })

  it('should returns 0 if the user wins',() => {
    let board = [
                  [0,1,0],
                  ['E',1,'E'],
                  [0,1,'E']
    ]
    expect(TicTacToe.init(board).getWinner()).to.equal(-1)
  })
})


describe('Computer choice method',() => {
  let boardTab;

  beforeEach(()=>{
    boardTab = [
                [
                  ['E','E',1],
                  ['E','E','E'],
                  ['E','E','E']
                ],
                [
                  ['E','E',1],
                  ['E',0,'E'],
                  [1,'E','E']
                ],
                [
                  ['E','E',1],
                  [0,0,'E'],
                  [1,'E','E']
                ],
                [
                  ['E','E',1],
                  [0,0,1],
                  [1,'E','E']
                ]
               ]
  })

  it('Given different state of the board, should return an array of 4 items',() => {

    boardTab.forEach((board) => {
      let computerChoice = Computer.miniMax(board,true)
      expect(computerChoice.length).to.equal(4);
      expect(computerChoice[0]).to.be.a('number'); 
      expect(computerChoice[1]).to.be.an('array'); 
      expect(computerChoice[2]).to.be.a('number'); 
      expect(computerChoice[3]).to.be.a('number'); 
    })
  })

  it('Given different states of the board, should return a number 0 or 1 as an utility',() => {
    boardTab.forEach((board) => {
      let utility = Computer.miniMax(board,true)[0]
      expect(utility).to.be.within(0,1)
    })
  })

})
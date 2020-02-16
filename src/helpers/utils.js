import { GAME_BOARD } from './constants';

export const initializeGameState = () => {
  const board = [];
  for (let i = 0; i < GAME_BOARD.COLUMNS; i++) {
    let column = []
    for (let j = 0; j < GAME_BOARD.ROWS; j++) {
      column[j] = {row: j, column: i, player:0};
    }
    board[i] = column;
  }
  return {
    players: {
      1: {playerNumber: 1},
      [-1]: {playerNumber: -1},
    },
    currentPlayer: 1,
    winner: 0,
    board
  }
}



export const checkWinner = (board, currentPlayer) => {
  const checkColumnRecur = (x, y , player, count) => {
    if (board[x][y + 1] && board[x][y + 1].player === player) {
      if (count + 1 === 4) return true;
      return checkColumnRecur(x, y + 1, player, count + 1);
    }
    return false;
  }
  const checkRowRecur = (x, y , player, count) => {
    if (board[x + 1][y] && board[x + 1][y].player === player) {
      if (count + 1 === 4) return true;
      return checkRowRecur(x + 1, y, player, count + 1);
    }
    return false;
  }
  const checkColumnDownRightRecur = (x, y, player, count) => {
    if (board[x + 1][y + 1] && board[x + 1][y + 1].player === player) {
      if (count + 1 === 4) return true;
      return checkColumnDownRightRecur(x + 1, y + 1, player, count + 1);
    }
    return false;
  }
  const checkColumnDownLeftRecur = (x, y, player, count) => {
    if (board[x - 1][y + 1] && board[x - 1][y + 1].player === player) {
      if (count + 1 === 4) return true;
      return checkColumnDownLeftRecur(x - 1, y + 1, player, count + 1);
    }
    return false;
  }
  for (let i = 0; i < GAME_BOARD.COLUMNS; i++) {
    let column = board[i];
    for (let j = 0; j < GAME_BOARD.ROWS; j++) {
      // let firstSquare = column.find(item => item.player === currentPlayer)
      let firstSquare = board[i][j];
      if (firstSquare.player === 0) continue;
      if (firstSquare && firstSquare.row <= 2) {
        let res = checkColumnRecur(firstSquare.column, firstSquare.row, firstSquare.player, 1);
        if (res) return res;
      }
      if (firstSquare && firstSquare.column <= 3) {
        let res = checkRowRecur(firstSquare.column, firstSquare.row, firstSquare.player, 1);
        if (res) return res;
      }
      if (i <= 3 && firstSquare && firstSquare.row <= 2) {
        let res = checkColumnDownRightRecur(firstSquare.column, firstSquare.row, firstSquare.player, 1);
        if (res) return res;
      }
      if (i >= 3 && firstSquare && firstSquare.row <= 2) {
        let res = checkColumnDownLeftRecur(firstSquare.column, firstSquare.row, firstSquare.player, 1);
        if (res) return res;
      }
    }
  }
}

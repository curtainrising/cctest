import React, { useState } from 'react';
import Square from '../common/Square';
import styled from 'styled-components';
import res from '../../res';
import { initializeGameState, checkWinner } from '../../helpers/utils';

const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 100px);
  grid-template-columns: repeat(7, 100px);
`;


const GameBoard = () => {
  const [ boardState, setBoardState ] = useState(initializeGameState())
  const onClick = (location) => {
    if (boardState.winner === 0 && boardState.board[location.x - 1][0].player === 0) {
      let dropSquare = boardState.board[location.x - 1].find(item => item.player !== 0)
      let dropRow = 0;
      if (dropSquare) {
        dropRow = dropSquare.row - 1;
      } else {
        dropRow = 5;
      }
      let newBoardState = {...boardState, currentPlayer: boardState.currentPlayer * -1};
      newBoardState.board[location.x - 1][dropRow] = {
        ...newBoardState.board[location.x - 1][dropRow],
        player: boardState.currentPlayer
      }
      let res = checkWinner(newBoardState.board, boardState.currentPlayer);
      if (res) {
        newBoardState['winner'] = boardState.currentPlayer;
      }
      setBoardState(newBoardState);
    }
  }
  const onReset = () => {
    setBoardState(initializeGameState());
  }
  const board = [];
  boardState.board.map(column => {
    column.map(item => {
      let square = (
        <Square
          onClick={onClick}
          x={item.column + 1}
          y={item.row + 1}
          player={item.player}
        />
      );
      board.push(square)
    })
  })

  return (
    <div>
      <Board>
        {board}
      </Board>
      <button onClick={onReset}>{res.reset}</button>
      <div>
        {boardState.winner === 1 ? res.playerOneWin : boardState.winner === -1 ? res.playerTwoWin : ''}
      </div>
    </div>
  )
}

export default GameBoard

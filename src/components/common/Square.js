import React, { useState } from 'react';
import styled from 'styled-components';
import res from '../../res';

const SquarePiece = styled.div`
  grid-column: ${(props) => props.x};
  grid-row: ${(props) => props.y};
`

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border-color: black;
  border-width: thin;
  border-style: solid;
`

const GamePiece = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.player === 1 ? 'black': 'red'};
  border-radius: 60px;
`

const Square = (props) => {
  const {onClick, x, y, player} = props;
  return (
    <SquarePiece x={x} y={y}>
      <a onClick={() => onClick({x,y})}>
        <StyledDiv>
          {player !== 0 && (
            <GamePiece player={player}/>
          )}

        </StyledDiv>
      </a>
    </SquarePiece>
  )
}

export default Square;

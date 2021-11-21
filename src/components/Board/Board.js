import React from 'react'
import './Board.css';
import { Tile } from "../Tile";

const Board = ({ tiles, numTiles }) => {

  const renderTiles = tiles.map(tile => <Tile {...tile} />)
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {renderTiles}
    </div>
  )
}

export default Board

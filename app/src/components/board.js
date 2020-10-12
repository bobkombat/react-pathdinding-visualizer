import React, { useState, useEffect } from 'react';
import './board.css';
import useWindowDimensions from '../hooks/windowDimensions'

export default function Board() {
  const { height, width } = useWindowDimensions();
  const [rowNode, setRowNode] = useState();
  const [columnNode, setColumnNode] = useState();

  useEffect(() => {
    setRowNode(Math.floor(height / 30))
    setColumnNode(Math.floor(width / 26))
  }, [height, width])

  return (
    <div id="board">
      {
        [...Array(rowNode)].map((x, idx) => {
          return (
            <div id={`row-${idx + 1}`} key={`row-${idx}`} className="row">
              {
                [...Array(columnNode)].map((z, id) => <div id={`node-${idx}-${id}`} key={`node-${idx}-${id}`} className="node"></div>)
              }
            </div>
          )
        })
      }
    </div>
  )
}

export function createBoard(height, width, start, finish) {
  const board = [];

  console.log(start, finish);

  for (let i = 0; i < height; i++) {
    const tempArray = [];
    for (let j = 0; j < width; j++) {
      if (start.y === i && start.x === j)
        tempArray.push({
          x: j,
          y: i,
          wall: false,
          start: true,
          finish: false,
          visited: false,
          path: false,
          fScore: null,
          gScore: Infinity,
          weight: 1,
        });
      else if (finish.y === i && finish.x === j)
        tempArray.push({
          x: j,
          y: i,
          wall: false,
          start: false,
          finish: true,
          visited: false,
          path: false,
          fScore: null,
          gScore: Infinity,
          weight: 1,
        });
      else
        tempArray.push({
          x: j,
          y: i,
          wall: false,
          start: false,
          finish: false,
          visited: false,
          path: false,
          fScore: null,
          gScore: Infinity,
          weight: 1,
        });
    }
    board.push(tempArray);
  }

  return board;
}

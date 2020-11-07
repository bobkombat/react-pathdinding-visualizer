export function createBoard(height, width, start, finish) {
  const board = [];

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
          parent: null,
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
          parent: null,
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
          parent: null,
        });
    }
    board.push(tempArray);
  }

  return board;
}

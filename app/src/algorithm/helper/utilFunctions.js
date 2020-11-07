export function reconstructPath(cameFrom, current) {
  const totalPath = [current];
  while (current.parent || !current.start) {
    current = current.parent;
    totalPath.push(current);
  }

  return totalPath;
}

export function getCurrentNeighbor(board, current) {
  const neighbors = [];

  if (board[current.y][current.x + 1] !== undefined) {
    neighbors.push(board[current.y][current.x + 1]);
  }
  if (board[current.y][current.x - 1] !== undefined) {
    neighbors.push(board[current.y][current.x - 1]);
  }
  if (board[current.y + 1] !== undefined) {
    neighbors.push(board[current.y + 1][current.x]);
  }
  if (board[current.y - 1] !== undefined) {
    neighbors.push(board[current.y - 1][current.x]);
  }

  return neighbors;
}

import heuristicTypeChooser from "./helper/heuristic.js";
import MinHeap from "./helper/minHeap.js";
import { reconstructPath, getCurrentNeighbor } from "./helper/utilFunctions.js";

export default function AStarAlgorithm(board, startY, startX, finishY, finishX, heuristicType) {
  heuristicType = heuristicType || "MANHATTAN";

  const openSet = new MinHeap();

  const cameFrom = {};

  const startNode = board[startY][startX];
  const endNode = board[finishY][finishX];

  startNode.gScore = 0;
  startNode.fScore = heuristicTypeChooser(
    heuristicType,
    startNode.y,
    startNode.x,
    endNode.y,
    endNode.x
  );

  openSet.insert(startNode);
  const finish = 10;
  let z = 0;
  while (openSet.length > 1 && z != finish) {
    let current = openSet.getMinNode;

    board[current.y][current.x]["visited"] = true;

    if (current.x == endNode.x && current.y == endNode.y) {
      return reconstructPath(cameFrom, current);
    }

    openSet.removeMinNode();

    const neighbors = getCurrentNeighbor(board, current);
    for (let neighbor of neighbors) {
      if (neighbor.wall === true) {
        continue;
      }

      const x = neighbor.x;
      const y = neighbor.y;

      const tentativeGScore =
        current.x + (x - current.x === 0 || y - current.y === 0 ? 1 : Math.SQRT2);

      if (!neighbor.visited || tentativeGScore < neighbor.g) {
        board[y][x]["parent"] = current;
        board[y][x].gScore = tentativeGScore;
        board[y][x].fScore =
          neighbor.gScore +
          heuristicTypeChooser(heuristicType, neighbor.y, neighbor.x, endNode.y, endNode.x);
        if (!openSet.search(neighbor)) {
          openSet.insert(board[y][x]);
        }
      }
    }
  }

  return [];
}

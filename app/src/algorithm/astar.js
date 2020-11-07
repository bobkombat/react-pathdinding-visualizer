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

  while (openSet.length > 1) {
    let current = openSet.getMinNode;

    console.log(current, "<<<<<<<<<<<<<<< line 29");

    if (current.x == endNode.x && current.y == endNode.y) {
      return reconstructPath(cameFrom, current);
    }

    console.log("test", openSet.length);
    openSet.removeMinNode();

    const neighbors = getCurrentNeighbor(board, current);
    console.log("neigbors <<<<<<<<<<<", neighbors);

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
        neighbor.gScore = tentativeGScore;
        neighbor.fScore =
          neighbor.gScore +
          heuristicTypeChooser(heuristicType, neighbor.y, neighbor.x, endNode.y, endNode.x);

        if (!openSet.search(neighbor)) {
          openSet.insert(neighbor);
        }
      }
    }
  }

  return [];
}

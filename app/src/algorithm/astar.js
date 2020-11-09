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
  board[startY][startX]["visited"] = true;

  const visitedNode = [];

  while (openSet.length > 1) {
    let current = openSet.getMinNode;

    board[current.y][current.x]["visited"] = true;

    if (current.x == endNode.x && current.y == endNode.y) {
      return reconstructPath(cameFrom, current);
    }

    const test = openSet.heap.slice(1).map((x) => x.fScore);
    console.log(test);
    // console.log(Math.min(...test), openSet.removeMinNode());
    // console.log(Math.min(...openSet.heap.slice(1).map((x) => x.fScore)));

    openSet.removeMinNode();

    const neighbors = getCurrentNeighbor(board, current);
    for (let neighbor of neighbors) {
      if (neighbor.wall === true) {
        continue;
      }

      const x = neighbor.x;
      const y = neighbor.y;

      const tentativeGScore =
        current.gScore + (x - current.x === 0 || y - current.y === 0 ? 1 : Math.SQRT2);

      if (!neighbor.visited || tentativeGScore < board[y][x].gScore) {
        board[y][x]["parent"] = current;
        board[y][x].gScore = tentativeGScore;
        board[y][x].fScore =
          board[y][x].gScore + heuristicTypeChooser(heuristicType, y, x, endNode.y, endNode.x);

        if (!openSet.search(neighbor)) {
          openSet.insert(board[y][x]);
        }
      }
    }
  }

  return [];
}

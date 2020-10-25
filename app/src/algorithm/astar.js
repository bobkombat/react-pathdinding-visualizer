import heuristicTypeChooser from "./helper/heuristic.js";

export default function AStarAlgorithm(
  board,
  startY,
  startX,
  finishY,
  finishX,
  heuristicType
) {
  const openList = []; //Min-Heap

  const startNode = board[startY][startX];
  const endNode = board[finishY][finishX];

  startNode.gScore = 0;

  const cameFrom = [];
}

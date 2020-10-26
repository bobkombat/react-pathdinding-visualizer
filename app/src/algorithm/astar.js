import heuristicTypeChooser from "./helper/heuristic.js";
import MinHeap from "./helper/minHeap.js";

export default function AStarAlgorithm(
  board,
  startY,
  startX,
  finishY,
  finishX,
  heuristicType
) {
  heuristicType = heuristicType || "MANHATTAN";

  const openList = new MinHeap();

  const cameFrom = [];

  const startNode = board[startY][startX];
  const endNode = board[finishY][finishX];

  startNode.gScore = 0;
  startNode.fScore = heuristicTypeChooser(heuristicType);

  const cameFrom = [];
}

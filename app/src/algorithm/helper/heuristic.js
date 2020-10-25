export default function heuristicTypeChooser(
  arguments,
  currentY,
  currentX,
  finishY,
  finishX
) {
  switch (arguments) {
    case "EUCLIDEAN":
      return euclideanDistance(currentY, currentX, finishY, finishY);
    case "MANHATTAN":
      return manhattanDistance(currentY, currentX, finishY, finishX);
    case "CHEBYSHEV":
      return chebyshevDistance(currentY, currentX, finishY, finihsX);
    default:
      return manhattanDistance(currentY, currentX, finishY, finishX);
  }
}

function manhattanDistance(currentY, currentX, finishY, finishX) {}

function euclideanDistance(currentY, currentX, finishY, finishX) {}

function chebyshevDistance(currentY, currentX, finishY, finishX) {}

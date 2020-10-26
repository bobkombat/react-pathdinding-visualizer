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

function manhattanDistance(currentY, currentX, finishY, finishX) {
  return Math.abs(finishX - currentX) + Math.abs(finishY - currentY);
}

function euclideanDistance(currentY, currentX, finishY, finishX) {
  return Math.sqrt(
    Math.pow(finishX - currentX, 2) + Math.pow(finishY - currentY, 2)
  );
}

function chebyshevDistance(currentY, currentX, finishY, finishX) {
  return Math.max(Math.abs(finishX - currentX), Math.abs(finishY, currentY));
}

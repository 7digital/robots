function Maze(mazeLines) {
  this.mazeLines = mazeLines
}

function getLocationOf(tile){
	var yIndex, xIndex;

	for(yIndex = 0; yIndex < this.mazeLines.length; yIndex = yIndex + 1){
		xIndex = this.mazeLines[yIndex].indexOf(tile); 
		if (xIndex >= 0){
			return { x: xIndex, y: yIndex };
		}		
	}
}

function getAvailableDirections(playerNumber){
	var playerLoc = this.getLocationOf(playerNumber);
	var availableDirections = [];

	var eastLoc = { 
			x: playerLoc.x + 1, 
			y: playerLoc.y 
		};

	var eastTile = this.mazeLines[eastLoc.y][eastLoc.x];

	if (eastTile === '.') {
		availableDirections.push('E');
	}

	var westLoc = { 
			x: playerLoc.x - 1, 
			y: playerLoc.y 
		};

	var westTile = this.mazeLines[westLoc.y][westLoc.x];

	if (westTile === '.') {
		availableDirections.push('W');
	}


	return availableDirections;
}

Maze.prototype.getLocationOf = getLocationOf;
Maze.prototype.getAvailableDirections = getAvailableDirections;


module.exports = Maze;
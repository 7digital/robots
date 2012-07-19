function Maze(mazeLines) {
	this.mazeLines = mazeLines;
	this.directions = {
		W: {x:-1, y:0 },
		E: {x:1,  y:0 }
	};
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

function getAdjacentLoc(loc, direction){
	var offset = this.directions[direction];
	return {
		x: loc.x + offset.x,
		y: loc.y + offset.y
	};
}

function getAvailableDirections(playerNumber){
	var playerLoc = this.getLocationOf(playerNumber);
	var availableDirections = [];
	var directionNames = Object.keys(this.directions);
	var self = this;

	directionNames.forEach(function (direction) {
		var adjacentLoc = self.getAdjacentLoc(playerLoc, direction);
		var adjacentTile = self.mazeLines[adjacentLoc.y][adjacentLoc.x];
		if (adjacentTile === '.') {
			availableDirections.push(direction);
		}		
	});

	return availableDirections;
}

Maze.prototype.getLocationOf = getLocationOf;
Maze.prototype.getAvailableDirections = getAvailableDirections;
Maze.prototype.getAdjacentLoc = getAdjacentLoc;

module.exports = Maze;
function Board() {
	this.gameBoard = [];
	this.shipArr = []

	this.placeShip = function(n1, n2, length, dir, shipName) {

		if (dir === 'h') {
			for (let i = n2; i < length + n2; i++) {
				this.gameBoard[n1].splice(i, 1, shipName)
			}
		}

		if (dir === 'v') {
			for (let i = n1; i < length + n1; i++) {
				this.gameBoard[i].splice(n2, 1, shipName)
			}
		}

		console.log(this.gameBoard)
	}

	this.attack = function(n1, n2, player) {
		if (this.gameBoard[n1][n2] !== 0 && this.gameBoard[n1][n2] !== 'x') {
			const shipName = this.gameBoard[n1][n2]
			ships.shipHit(shipName, player)
			this.gameBoard[n1].splice(n2, 1, 'x')
		} else {
			console.log('miss')
		}
	}

	this.createBoard = function() {
		for (let i = 0; i < 10; i++) {
			this.gameBoard[i] = [];
			for (let j = 0; j < 10; j++) {
				this.gameBoard[i][j] = 0;
			}
		}
	}
}

const ships = (() => {
	
	function ship5(n1, n2, dir, player) {
		const length = 5
		const ship = {
			name: 'shipFive',
			lives: 5
		}
		player.placeShip(n1, n2, length, dir, ship.name)
		player.shipArr.push(ship)
	}

	function ship4(n1, n2, dir, player) {
		const length = 4
		const ship = {
			name: 'shipFour',
			lives: 4
		}
		player.placeShip(n1, n2, length, dir, ship.name)
		player.shipArr.push(ship)
  }

  function ship3(n1, n2, dir, player) {
		const length = 3
		const ship = {
			name: 'shipThree',
			lives: 3
		}
		player.placeShip(n1, n2, length, dir, ship.name)
		player.shipArr.push(ship)
	}

	function shipHit(shipName, player) {
		// debugger
		const attackedShip = player.shipArr.findIndex((e) => {
			if (e.name === shipName) {
				console.log(e.name)
				return true
			}
		})
		player.shipArr[attackedShip].lives --
		if (player.shipArr[attackedShip].lives === 0) {
			console.log('sunk')
		}
	}
	
	return { ship5, ship4, ship3, shipHit } 
})()

const player1 = new Board
player1.createBoard()
const player2 = new Board
player2.createBoard()

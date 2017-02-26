new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startNewGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function() {
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits monster for " + damage
			});

			if (this.checkWin()) {
				return;
			}

			this.monsterAttack();

			this.checkWin();

		},
		specialAttack: function() {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits monster for " + damage
			});

			if (this.checkWin()) {
				return;
			}

			this.monsterAttack();
			this.checkWin();
		},
		giveUp: function() {
			this.gameIsRunning = false;
		},
		heal: function() {
			this.playerHealth = Math.min(this.playerHealth + 10, 100);
			this.turns.unshift({
				isPlayer: true,
				text: "Player heals for 10"
			});
			this.monsterAttack();
		},
		monsterAttack: function() {
			var damage = this.calculateDamage(5, 12)
			this.turns.unshift({
				isPlayer: false,
				text: "Player hits monster for " + damage
			});
			this.playerHealth -= damage;
		},
		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm("You won! New game?")) {
					this.startNewGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm("You lost! New game?")) {
					this.startNewGame();
				} else {
					this.gameIsRunning = false;
				}
				return false;
			}
		}
	}
});
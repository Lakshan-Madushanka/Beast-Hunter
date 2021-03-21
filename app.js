new Vue({
    
        el: '#app',
        data: {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false,
            logs: []
        },
        methods: {
            startGame: function() {
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.gameIsRunning = true;
                this.logs.splice(0);
            },
            attack: function() {
                // calc monster health
                this.monsterAttack();
                //calc player health
                this.playerAttack()

            },
             specialAttack: function() {
                 this.monsterAttack(10, 20);
                 this.playerAttack(10, 20)
                
            },
            heal: function() {
                if(this.playerHealth <= 0) {
                    this.playerHealth += 10;
                }else {
                    this.playerAttack = 100;
                }
                this.logs.unshift({
                    isplay: true,
                    text: 'Player got healed by 10'
                })
                
                this.monsterAttack();
            },
            giveUp: function() {
                if(confirm('Are you sure to give up ?')) {
                        this.gameIsRunning = false;
                        this.logs.splice(0);
                       }
            },
            playerAttack: function() {
                let damage = this.calcDamage(3, 10)
                this.monsterHealth -= damage;
                this.logs.unshift({
                    isPlaying: true,
                    text: 'Player hits monster for ' + damage 
                })
                if(this.checkWon()){
                    return;
                }
            },
            monsterAttack: function() {
                let damage = this.calcDamage(3, 10)
                this.playerHealth -= damage;
                this.logs.unshift({
                    isPlaying: false,
                    text: 'Monster hits player for ' + damage 
                })
                if(this.checkWon()){
                    return;
                }
            },
            calcDamage: function(min, max) {
                let damage = Math.max(Math.floor(Math.random() * max + 1 , min))
                return damage;
            },
            checkWon: function() {
                if(this.playerHealth <=0) {
                    if(confirm('Monter won, try again ?')) {
                        this.startGame();
                       }else {
                           this.gameIsRunning = false;
                       }
                    return true;
                    
                }else if(this.monsterHealth <=0) {
                    if(confirm('You won, play again ?')) {
                        this.startGame();
                       }else {
                           this.gameIsRunning = false;
                       } 
                     return true;

                }
            }
        }
    
});
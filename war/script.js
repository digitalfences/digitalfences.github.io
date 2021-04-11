



/* 
PseudoCode for War Game
ON LOAD:
display instructions
prompt player to name players
set player name and computer name to input or defaults
prompt player to begin game when ready

SET-UP(When game is initiated)
let a card {
	 suit: “spades “||”hearts” ||”diamonds” ||”clubs”
	 rank: an integer between 2-14 inclusive
}
let deck be an array of cards
for each possible suit(4){
	for each rank (13){
		add card object to deck{
			rank: rank,
			suit: suit
		}
	}
}

shuffle deck by randomizing indices of cards in deck
deal deck into two equal arrays of 26
	playerDeck[];
	compDeck[];
clear instructions to make room for game messages
initialize game arrays:
	cardsInPlay[];
	cardsInRound[];

GAME LOOP:
for both players:

push (pop playerDeck[0])  && push (pop compDeck[0] to cardsInPlay;
compare value 
higher value is the winner (pop to cards in round)
cards in round go to the deck the winner originated from
if cards are equal initiate war pop all cardsinplay and three more cards to cards In round from both decks
    if one of the arrays is empty after a pop
        if in war, last card popped goes to in play
        in not in war, end game, print victory or defeat message(whoever ran out of cards lost) and break loop. 
continue loop

POST-GAME
when game is exited, result should be displayed on screen in place of instructions. The buttons to reinitiate game should display as well as options to change name of players. 





*/
class Card{
    constructor(rank, suit){
        this.rank = rank,
        this.suit = suit;
        if (rank > 10){
            if( rank == 11){
                this.name = "Jack of " + suit;
            }
            else if (rank == 12){
            this.name = "Queen of " + suit;
         }
            else if (rank == 13){
                this.name = "King of " + suit;
            }
            else{
                this.name = "Ace of " + suit;
            }
        }
        else{
            this.name = rank + " of " + suit;
        }
    }
}

/** make deck uses the inner function make rank to create every card of every suit from 2 - Ace */
class Deck{
    constructor(suits,ranks){
        this.suits = [...suits];
        this.ranks = [...ranks];
        this.deck = [];
        this.makeDeck();
    }
    makeCard(rank,suit){
            this.deck.push(new Card(rank,suit));
        }
    makeRank(rank){
                this.suits.forEach(suit => this.makeCard(rank,suit))
        }
    makeDeck(){
        this.ranks.forEach(rank => this.makeRank(rank));
    }
    /* The Fisher Yates shuffle algorithm as explained here
    https://www.frankmitchell.org/2015/01/fisher-yates/ */
    shuffleDeck(){
        let temp = null;
        let j = 0;
        for(let i = this.deck.length -1; i > 0; i-=1){
            j = Math.floor(Math.random()*(i + 1));
            temp = this.deck[i];
            this.deck[i]= this.deck[j];
            this.deck[j] = temp;
        
        }
    }
    dealDeck(){
        this.shuffleDeck();
        let playerDeck = this.deck.slice(0,26);
        let computerDeck = this.deck.slice(26,52);
        this.deck = [playerDeck,computerDeck];
        return this.deck
    }
    


}
class Player{
    constructor(name){
        this.name = name;
        this.deck = [];
        this.hasLost = false;
    }
    playCard(){
        if (this.deck.length == 0){
            this.hasLost = true;
            return; 
        }
        return this.deck.shift();
    }
    takeCards(cards){
        this.deck.push(...cards);
    }
}
class WarGame{
    constructor(name1,name2){
        let suits = ["Spades","Hearts","Diamonds","Clubs"];
        let ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14]
        let warDeck  = new Deck(suits, ranks);
        warDeck = warDeck.dealDeck();
        let p1 = new Player(name1);
        let p2 = new Player(name2);
        p1.deck = warDeck[0];
        p2.deck = warDeck[1];
        this.board = [];
        this.players = [p1,p2];
        this.gameOver = false;
        this.main();

    }
    main(){
        let p1 = this.players[0];
        let p2 = this.players[1];
        while(this.gameOver == false){
            this.playRound();
        }
        console.log("Game completed")
        if(p1.hasLost){
            console.log(p2. name + " Wins!");
        }
        else if(p2.hasLost){
            console.log(p1.name + " Wins!");
        }
        else{
            console.log("War... War never changes. We send young people out to fight and die and for what? There is no question of winning a war. Only whether you can come back from what you've lost.");
        }
    }

    endGame(){
        this.gameOver = true;
        return;
    }

    playRound(){
        let p1 = this.players[0];
        let p2 = this.players[1];
        let index1 = this.board.push(p1.playCard()) -1;
        let index2 = this.board.push(p2.playCard()) -1;
        if(p1.hasLost == true||p2.hasLost == true){
            this.endGame();
            return;
        }
        console.log(p1.name + " played " + this.board[index1].name);
        console.log(p2.name + " played " + this.board[index2].name);
        if(this.board[index1].rank > this.board[index2].rank){
            
            /*Print a message for each "round" of the game showing the cards played by each user, 
            who won the round, and how many cards each player now has.
            */
            console.log(p1.name + " wins round.");
            p1.takeCards(this.board);
            console.log(p1.name + " has " + p1.deck.length + " cards");
            console.log(p2.name + " has " + p2.deck.length + " cards");
            while(this.board.length > 0){
                this.board.pop();
            }
            return;
        }
        else if(this.board[index1].rank < this.board[index2].rank){
            
            console.log(p2.name + " wins round.");
            p2.takeCards(this.board);
            console.log(p1.name + " has " + p1.deck.length + " cards");
            console.log(p2.name + " has " + p2.deck.length + " cards");
            while(this.board.length > 0){
                this.board.pop();
            }
            return;
        }
        else{
            console.log("War! Three Cards each staked face down.");
            this.war();
            return;
        }
    }
    war(){
        let p1 = this.players[0];
        let p2 = this.players[1];
        this.board.push(p1.playCard())
        this.board.push(p2.playCard())
        if(p1.hasLost == true||p2.hasLost == true){
            this.endGame();
            return;
        }
        this.board.push(p1.playCard())
        this.board.push(p2.playCard())
        if(p1.hasLost == true||p2.hasLost == true){
            this.endGame();
            return;
        }
        this.board.push(p1.playCard())
        this.board.push(p2.playCard())
        if(p1.hasLost == true||p2.hasLost == true){
            this.endGame();
            return;
        }
        return;

    }
    addCardsToBoard(cards){
        this.board.push(...cards);
    }
    addCardsToPlayerDeck(player){
        player.deck.push(...this.board);
    }
}

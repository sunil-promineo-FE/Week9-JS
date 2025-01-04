class Card {
    constructor(suit, value, numericValue) {
      this.suit = suit;
      this.value = value;
      this.numericValue = numericValue;
    }
  
    toString() {
      return `${this.value} of ${this.suit}`;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = []; //array of Card Objects
      // Four suits to represent the appearance (user interface - ui) for your cards
      let suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  
      for (let suit of suits) {
        for (let value of values) {
          let cardValue = parseInt(value); // Convert string to number if possible 
          if (isNaN(cardValue)) 
            { // Assign numeric values to face cards and Ace 
                if (value === 'Jack') 
                  cardValue = 11; 
                else if (value === 'Queen') 
                  cardValue = 12; 
                else if (value === 'King') 
                  cardValue = 13; 
                else if (value === 'Ace') 
                  cardValue = 1; 
              }          
          this.cards.push(new Card(suit, value, cardValue));
          // Add the card to the deck deck.push({ suit: suit, value: value, numericValue: cardValue });          
        }
      }
    }
  
    //Get a new random index and swap two card objects[i,j] = objects[j,i]
    //where card[i] becomes card[j] & vice versa
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal() {
      return this.cards.pop();
    }

    printDeck(){
        for(Card of this.cards){
            console.log(Card);
        }
    }
  }
  
  const deck = new Deck();
  deck.shuffle();
 //deck.printDeck(); 
  
 //Declare player class

  class Player {
    constructor(name) {
      this.name = name;
      this.deck = [];
      this.score = 0;
    }
  
    // Method to add a card to the player's hand
    addCard(card) {
      this.deck.push(card);
    }
  
  }

  // Create two players
  let player1 = new Player('Player 1');
  let player2 = new Player('Player 2');
  
  console.log(player1);
  console.log(player2);

  // Deal 26 cards to each player 
  for (let i = 0; i < 26; i++) 
  { 
        player1.addCard(deck.deal()); 
        player2.addCard(deck.deal()); 
  }
  console.log("\n");
 
  console.log(player1);
  console.log(player2);  

// Players take turns to play cards 
let ptsplayer1=0,ptsplayer2 =0; 
//let cardp1=null, cardp2=null;
console.log("------Game Starts-----");
while (player1.deck.length > 0 && player2.deck.length > 0) 
{ 
        cardp1 = player1.deck.pop();
        cardp2 = player2.deck.pop();

        console.log("\n");
        console.log("Player 1 plays " + cardp1);
        console.log("Player 2 plays " + cardp2);

        if(cardp1.numericValue > cardp2.numericValue){
          console.log("Player 1 scores a point");
          player1.score++;
        }
        else if((cardp2.numericValue > cardp1.numericValue)){
          console.log("Player 2 scores a point");
          player2.score++;
        }
        else
        {
          console.log("Tie!!!!!!");          
        }
        console.log(`Score: Player 1 [ ${player1.score} ] Player 2[ ${player2.score} ] `);
}

console.log(`\n Final Score: Player 1 [ ${player1.score} ] Player 2[ ${player2.score} ] `);

if (player1.score > player2.score)
{
  console.log("\n Player 1 wins \n");
}
else if (player2.score > player1.score){
  console.log("Player 2 wins \n");
}
else
 console.log("Scores Tied\n");


// Function to update the scores on the webpage
function updateScores() {
    document.getElementById('player1-score').textContent = player1.score;
    document.getElementById('player2-score').textContent = player2.score;
}

// Initial update of scores
updateScores();
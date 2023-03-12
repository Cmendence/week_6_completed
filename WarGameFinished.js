const suits = ["♠", "♥", "♣", "♦"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];


// deck takes in cards. We have used the freshDeck function to return a flatmapped array of the new deck with suits
class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  // shorthand for this.cards.length
  get numberOfCards() {
    return this.cards.length;
  }

  // Fisher Yates shuffle. Start at the back, take the current card [i], get a random integer position that we have
  // not yet accessed in the deck, and swap those cards.
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

// card takes in suit and value, rank = index
class Card {
  constructor(suit, value, rank) {
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}

// fresh deck takes the suits, values, and rank(index) from the above array, and maps them out into one array of 52 cards,
// while assigning a rank(index) 0-12 of every card in each suit.
function freshDeck() {
  return suits.flatMap((suit) => {
    return values.map((value, rank) => {
      return new Card(suit, value, rank);
    });
  });
}

//time to make the donuts
const deck = new Deck();

// deckMid takes the total cards in the deck and divides by 2, rounded up
// this allows for more dynamic uses rather than just run the game 26 times. if the deck were 104 cards it would 
// know where the mid is and exactly how many games to run without changing the code
const deckMid = Math.ceil(deck.numberOfCards / 2);

// player object holds the name, points, and deck
class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.playerDeck = [];
  }
}

let playerOne = new Player("Bobby");
let playerTwo = new Player("Magnus");

//let the games begin

//declare winner or tie
const declareWinner=() =>{
  if (playerOne.points > playerTwo.points){
      console.log(`${playerOne.name} wins with ${playerOne.points} points!!!`);
  }else if (playerOne.points < playerTwo.points){
      console.log(`${playerTwo.name} wins with ${playerTwo.points} points!!!`);
  } else {
      console.log('Tie game!');
  }
  }

  
class Game {
  shufflenDeal() {
    console.log(`Get ready to play....WAR!
    
    `);
    // create a new deck object, shuffle it, and push(deal) half of the cards to each player.
    // deckMid is this.cards.length divided by 2, rounded up. wanted to use the array length rather than just 26
    const deck = new Deck();
    deck.shuffle();
    
    playerOne.playerDeck.push(...deck.cards.slice(0, deckMid));
    playerTwo.playerDeck.push(...deck.cards.slice(deckMid, deck.numberOfCards));
  }
  playWar() {
    // since we know that the deck was dealt equally, we can use the length of the deck. if there were 104 cards in the deck,
    // it would know to use 52 as the length rather than a static 26.
    for (let i = 0; i < deckMid; i++) {
      //playerOneCard and playerTwoCard are variables to show the card and suit, but make reading the if/else statement MUCH easier.
      let playerOneCard =
        playerOne.playerDeck[i].value + " " + playerOne.playerDeck[i].suit;
      let playerTwoCard =
        playerTwo.playerDeck[i].value + " " + playerTwo.playerDeck[i].suit;

      let playerOneRank = playerOne.playerDeck[i].rank;
      let playerTwoRank = playerTwo.playerDeck[i].rank;

      console.log(`${playerOne.name}'s card:  ${playerOneCard}`);
      console.log(`${playerTwo.name}'s card: ${playerTwoCard}`);
      // comparing the card rank at the equal index, console log the scoreboard with checkmark on the person who won the round
      if (playerOneRank > playerTwoRank) {
        playerOne.points++;
        console.log(`Score: ${playerOne.name}:  ${playerOne.points} ✔
       ${playerTwo.name}: ${playerTwo.points}
            `);
      } else if (playerOneRank < playerTwoRank) {
        playerTwo.points++;
        console.log(`Score: ${playerOne.name}:  ${playerOne.points}
       ${playerTwo.name}: ${playerTwo.points} ✔
            `);
      } else {
        console.log(`   Tie hand!
        `);
      }

    //   console.log(`Score: ${playerOne.name}:  ${playerOne.points}
    //    ${playerTwo.name}: ${playerTwo.points}
    //     `);
    }
  }

  
}
//declare playWar to new Game
let playWar = new Game();
playWar.shufflenDeal()
playWar.playWar();

declareWinner();

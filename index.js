// * Simplified BLACKJACK game

// initialise values worth the initial deal of 2 cards to both sides
let firstDeal = Math.floor(Math.random() * 22) + 4;
let dealerHand = firstDeal;
let playerHand = firstDeal;

// deal cards function
function dealCards(side) {
  let deal = side + (Math.floor(Math.random() * 12) + 2);
  return deal;
}

const win = 'You win!';
const lose = 'You lose!';

function checkScore() {
  // if player has 21, they win
  if (playerHand === 21) {
    alert(win);
    return;
  }
  // if player is bust, they lose
  if (playerHand > 21) {
    alert(lose);
    return;
  }
  // if dealer has 21, they lose
  if (dealerHand === 21) {
    alert('Dealer wins!');
    return;
  }
}
// create a play function
function blackJack() {
  alert('Your score: ' + playerHand);
  checkScore();

  while (playerHand < 21) {
    // ok in confirm = hit
    let option = confirm('Hit or Stay?');
    if (option) {
      playerHand = dealCards(playerHand);
      alert('Your score: ' + playerHand);
    } else {
      // check the score and break the loop
      checkScore();
      break;
    }
  }
  // check that player has 21
  if (playerHand > 21) {
    alert(lose);
    // if not, continue with dealer
  } else if (playerHand <= 21) {
    while (dealerHand < 17) {
      dealerHand = dealCards(dealerHand);
    }
    // dealer has 17-21 and player has less than dealer, they lose
    if (dealerHand >= 17 && dealerHand <= 21 && playerHand < dealerHand) {
      alert('Dealer wins!');
      return;
    }
    // if dealer is bust, they win
    if (dealerHand > 21) {
      alert(win);
      return;
      // if player has less than 21, dealer has less than 21, and player has more than dealer, they win
    } else if (playerHand < 21 && dealerHand < 21 && playerHand > dealerHand) {
      alert(win);
      return;
    } else {
      alert(lose);
      return;
    }
  }
}

// game init
let play = confirm('Wanna play BlackJack?');
if (play) {
  blackJack();
}

let count = 0;

function cc(card) {
  // Only change code below this line
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
  }
  if (card === 7 || card === 8 || card === 9) {
    count += 0;
  }
  if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count -= 1;
  }
  if (count > 0) {
  return count + " Bet";}
  return count + " Hold";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

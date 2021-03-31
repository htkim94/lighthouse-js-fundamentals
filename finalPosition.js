const finalPosition = function (moves) {
  // Your code in here ...
  let pos = [0, 0];
  for (const move of moves) {
    if (move === 'north') {
      pos[1]++;
    } else if (move === 'south') {
      pos[1]--;
    } else if (move === 'east') {
      pos[0]++;
    } else if (move === 'west') {
      pos[0]--;
    }
    console.log(pos);
  }
  return pos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

finalPosition(moves);
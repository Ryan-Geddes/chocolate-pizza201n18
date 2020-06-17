


var fruitsArr = ['apple', 'banana', 'blueberries', 'cherries'];
var selectedArr = [];
function randomfruits() {
  // starter code
  for(var i = 0; i < 10; i++){
    var randomFruitOne = randomizer(itemsArr.length);
    while ((randomFruitOne === selectedArr[0]) || (randomFruitOne ===selectedArr[1])){
      randomFruitOne = randomizer(itemsArr.length);
    }
    var randomFruitTwo = randomizer(itemsArr.length);
    while ((randomFruitTwo ===selectedArr[0]) || (randomFruitTwo ===selectedArr[1]) || (randomFruitTwo === randomFruitOne)){
      randomFruitTwo = randomizer(itemsArr.length);
    }
    console.log(fruitsArr[randomFruitOne], fruitsArr[randomFruitTwo]);
    selectedArr[0]=randomFruitOne;
    selectedArr[1]=randomFruitTwo;
  }
}
randomfruits();
//PRELIMS

for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log([i])

for(var i = 9; i <= 9; i++){
    console.log(i) 
}

var fruit = ['banana', 'orange', 'apople', 'kiwi']

for(var i = 0; i < 4; i++){
    console.log(fruit[i])
}

//BRONZE MEDAL

var bronzeArray = [];

for(var i = 0; i <= 9; i++){
    bronzeArray.push(i);
}

console.log(bronzeArray);

var i = 0;

function printEven (i) {
  for (let i = 1 ; i < 100; i++) {
    if(i % 2 === 0) {
      console.log(printEven);
    }
  }
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(let i = 0; i < fruit.length; i += 2) {
  console.log(fruit[i]) 
}
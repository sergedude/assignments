// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var num = 0;

// for(i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer"){
//         num++;
//     }
// }

// console.log(num);
   
// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ];

// for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//     if (peopleWhoWantToSeeMadMaxFuryRoad.age > 18){
//     return "old enough";
//     } else {
//         return "not old enough"; 
//     }
// }

console.log("Mike is not old enough to see Mad Max")

console.log("Madeline is old enough to see Mad Max")

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad.gender === "female"){
    return "Madeline is old enough. SHE'S good to see Mad Max Fury Road";
    } else {
        return "Mike is not old enough to see Mad Max Fury Road, don't let HIM in"; 
    }
}
console.log(i);



//PRELIMS

function prelim (){
    if (5 > 3){
        return "is greater than"
    }
}

console.log(prelim(5 > 3))

var cat = 3

function test (){
    if (cat == 3){
        return "is the length"
    }
}
console.log (test(cat))



function same (){
    let cat = "cat"
     if (cat === "dog"){
        return "same"
     } else { cat = !"dog"
         return "not the same"
     }
    


}
console.log (same(cat))

//BRONZE MEDAL

var person = {
    name: "Bobby",
    age: 12
  }

function movie (person){
    if (person.age > 18){
        return person.name + " is allowed to go to the movie "
    } else {
        return person.name + " is not allowed to go to the movie "
      }
    }


    console.log(movie (person))

function letter (person){
    if (person.name [0] === "B")
        return person.name + " is allowed into the movie"
}

console.log (letter(person))

function both (person){
    if ((person.name [0] === "B") && (person.age > 18)){
        return person.name + " is allowed into the movie"
    } else {
        return person.name + " is not allowed to go to the movie "
    }
}       
      


console.log (both(person))

//SILVER MEDAL


function silver (){
    if (1 === "1"){
        return "strict"
    } else if ( 1 = "1"){
        return "loose"
    } 
      
    
        
    }

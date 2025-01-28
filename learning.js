let lucky_no = 20
let wallet_balace = 300000

// to place a bet, the system will ask me how much I would like to use.
// the system deducts the amount from my wallet
//I am prompted to guess the lucky_no
//if my guess is equal  to the lucky number, I am credited back with 2 times the amount I played with
// else, I eventually lost the money I played with.
//print the balance at the end of the game.



//Array in Javasript
const fruits = ["apple", "orange", "banana"]
fruits.push("water_melon")
document.write(fruits.toString())

// const number1 = [2,4,5,1];
// const number2 = number1.map(number1);

// function myFunction(value){
//     return value * 
// }


//Object is Javascript
var dict = {
    firstname: "Victor",
    surname : "omuya",
    fav_food : ["rice", "beans"]
};

dict['gender'] = "male"
document.write(dict['fav_food'][0])

for(var values in dict){
    document.write(dict[values])
}
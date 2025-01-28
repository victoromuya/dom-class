document.write("this is from javascript")
function add(a, b){
    // to add two numbers
    console.log(a+b)
}

// add(3,6)

function multable(number){
    for(i = 1; i <= 12; i++){
        console.log(number, "x", i, "=", number * i)
    }
}

// multable(4)

function checkGreater(num1, num2, comment1, comment2){
    if(num1> num2){
        alert(comment1)
    }
    else{
        alert(comment2)
    }
}

let balance = 30000
// let stake_amount = prompt("enter amount to stake")

// checkGreater(balance, stake_amount, "continue", "not enough fund")

function square(user_entry){
    console.log(user_entry * user_entry)
}

square(prompt("enter a number and get its square"))

// we need to give access to students whose ages are more than 20 years old
// write a function to ask 5 people of there age using for loop, if a students age is 
// above 20 years, tell them "you have a access" else tell them "no access"

// for(i=0; i<=4; i++){
//     let balance = 300000
//     let number = 100
//     let stake_amount = prompt("enter amount to stake")

//     if(stake_amount <= balance){
//         balance = balance - stake_amount
//         let guessed_number = prompt("guess a number")

//         if(guessed_number == number){
            
//             balance = balance + (stake_amount*2)
//             alert("you won")
//             alert("your balance is: "+ balance)
//             break;
//         }
        
//         else{
//             alert("you lost.. ,your balance is: " + balance)
//         }
//     }

//     else{
//         alert('you do not have sufficient fund!')
//     }

//   }
    

// a function to get the square of any number entered by a user.

// 1. input age, saved into variable age
// 2. if age > 20 years, no access, else give access


class Houses{
    constructor(type, color, year){ // constructor is a special methos used to 
                                    // initialize object properties
        this.type = type;
        this.color = color;
        this.year = year
    }

    age() {
        const date = new Date()
        return date.getFullYear() - this.year
    }
}


const house1 = new Houses("duplex", "white", 2019)
// document.write("the house was built ", house1.age(), " years ago" )





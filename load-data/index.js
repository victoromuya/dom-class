import data from './data.json' with {type : 'json'};

fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => console.error("Error loading JSON file", error));



const frame = document.getElementById("loop")
data.data.map((element) => {
    console.log(element);

    //create a new division div
    let newDiv = document.createElement("div");

    //give it an id and a class name
    newDiv.id = element.id
    newDiv.className = "card"

    // send data from json as innerhtml with h2, p and button tags
    newDiv.innerHTML= `
            <img src="${element.img}" />
            <h2>${element.name}</h2>
            <p>${element.desc}</h2><br>
            <button class="btn">Lets See</button>
    `;

    // append it to the frame div
    frame.appendChild(newDiv)
});
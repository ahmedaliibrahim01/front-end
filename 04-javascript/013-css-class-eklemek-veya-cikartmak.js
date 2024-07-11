// ********** css class eklemek veya cikartmak **********

let greeting = document.querySelector("#greeting") 
greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silmek

console.log(greeting.classList)
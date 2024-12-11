
// let guestList = ["Alice", "Bob", "Charlie", "David"];
// guestList.unshift("Eve");
// guestList.pop();
// let isBobInList = guestList.includes("Bob");
// console.log("Final Guest List:", guestList);
// console.log("Is Bob in the list?", isBobInList);
// Given string
// let str = "Learn,Practice,Improve";
// let wordsArray = str.split(",");
// let reversedArray = wordsArray.reverse();
// let finalOutput = reversedArray.join(" ");
// console.log(finalOutput);


// let movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
// let middleMovies = movies.slice(1, 4);
// let additionalMovies = ["The Matrix", "The Godfather"];
// let combinedMovies = middleMovies.concat(additionalMovies);
// let finalList = combinedMovies.reverse();
// console.log("Final List:", finalList);/



// let playlist1 = ["Song1", "Song2", "Song3"];
// let playlist2 = ["Song4", "Song5"];

// let playlist = playlist1.concat(playlist2);

// playlist.shift();

// playlist.push("Song6");
// console.log("Final Playlist:", playlist);


// let str = "John,Doe,Jane,Smith";

// let namesArray = str.split(",");

// let includesJane = namesArray.includes("Jane");
// console.log("Does the array include 'Jane'?", includesJane);
// let finalOutput = namesArray.reverse().join(" ");
// console.log("Final Output:", finalOutput);



// let numbers = [1, 2, 3, 4, 5];
// numbers.shift();
// numbers.push(6, 7);
// let finalLength = numbers.length;
// console.log("Final Array:", numbers);
// console.log("Final Length:", finalLength);


// let shoppingCart = ["Milk", "Bread", "Eggs", "Butter"];
// let hasEggs = shoppingCart.includes("Eggs");
// console.log("Does the cart include 'Eggs'?", hasEggs);
// shoppingCart.splice(shoppingCart.indexOf("Butter"), 1);
// shoppingCart.push("Cheese", "Juice");
// console.log("Final Shopping Cart:", shoppingCart);



// let array1 = ["Alice", "Bob", "Charlie"];
// let array2 = ["David", "Eve"];
// let reversedArray1 = array1.reverse();
// let combinedArray = reversedArray1.concat(array2);
// combinedArray.unshift("Frank");
// console.log("Final List:", combinedArray);



let shoppingCart = ["Milk", "Bread", "Eggs", "Butter"];
let eggsIndex = shoppingCart.indexOf("Eggs");
if (eggsIndex !== -1) {
  shoppingCart.splice(eggsIndex, 1, "Cheese");
}
shoppingCart.unshift("Juice");
console.log("Final Shopping Cart:", shoppingCart);


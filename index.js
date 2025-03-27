//last element of the array
let arr1 = [3,7,34,90,12];
let arr2 = [true,"green","where",12,56];

console.log(arr1.at(-1));
console.log(arr2.at(-1));

//Join array into a string
const myPets = ["Cow","Bird","Snake","Dog"];
const strng = myPets.join("");
console.log(strng);

//Sort array
var arr = [-5,9,5,3,2,-3,6,8,4,1];
arr.sort((m,n) => m-n);
console.log(arr);

//Remove duplicate arrays
let y =["boy", "man","girl", "school", "girl","woman"];
let withoutDuplicate = [...new Set(y)];
console.log({withoutDuplicate});

let duplicated = y.filter((item, index) => y.indexOf(item) !== index);
console.log({duplicated});

//Search word in the array(food)
let arr5 = ["the", "way", "x", 4];
let x ="food"
let searched = arr5.includes(x) ? x : "the search word not found";
console.log({searched});

//Sort String
let word = "renniw"
let sortString = word.split('').sort().join('');
console.log(sortString);

//Insert Tomato
let fruits = ["Jungle fruit", "Strawberrries", "Wild berries", "Kiwi", "Pears", "Beetruits", "Cherries", "Pawpaws", "Grapes", "Lemons"];
fruits.splice(5, 0, "Tomato");
console.log(fruits)
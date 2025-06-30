const name = "Nishar"
const repoCount = 50

//console.log(name + repoCount + " value"); generally this syntax is not used only backtics use in modern era

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Nishar-Alam-Supaul')

//console.log(gameName[0]);//position
//console.log(gameName.__proto__);// object


// console.log(gameName.length);//length
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)//last number will not include
//console.log(newString);

const anotherString = gameName.slice(0, -2)//to study mdn
//console.log(anotherString);

const newStringOne = "   Nishar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Nishar.com/Nishar%20Alam"

console.log(url.replace('%20', '-'));

console.log(url.includes('Mudassir'));

console.log(gameName.split('-'));
const heros = ["hero1", "hero2", "hero3", "hero4"];
let A = heros.length;
console.log(A);
let B = heros.at(2);
console.log(B);
let C =heros.join(" * ");
console.log(C);
let D =heros.pop();
console.log(heros);
// console.log(D);
let E =heros.push("hero5");
// console.log(E);
console.log(heros);
let F = heros.shift();
console.log(heros);
// console.log(F);
let G = heros.unshift("hero6");
console.log(heros);
// console.log(F);
let H = delete heros[0];
console.log(heros);
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
heros.copyWithin(2,0);
console.log(heros);
heros.copyWithin(2,0,2);
console.log(heros);
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
heros.splice(2, 2, "hero9", "hero10");
console.log(heros);
heros.toSpliced(0, 1);
console.log(heros);
const ff=heros.slice(1);
console.log(heros);
const hh = heros.slice(3);
console.log(heros);
const II = heros.slice(2);
console.log(heros);
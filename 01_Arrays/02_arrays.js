let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

// flat() method
const another_array =[1,2,3,[4,5,6],7,6,7,[4,5]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

// from() method
console.log(Array.from({name:"Anubhav"}))
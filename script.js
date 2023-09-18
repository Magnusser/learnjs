function hello(name = 'Nimetu', age=Infinity){
    let yearText = 'years';
    if(age === 1){
        yearText = 'year';
    }
    // console.log('Hello ' + name + '. You are ' + age + ' years old.');
    console.log(`Hello ${name}. You are ${age} ${yearText} old`);
}

hello('Magnus',17);
hello('Nigel',128);
hello('Raul',1);
hello();

function volume(h, l, w){
    return h*w*l;
}

let answer = volume(4,2,5);
console.log(answer);

function numbers(i) {
    console.log(i);
    if(i<10){
        numbers(i+1);
    }
}

numbers(0);

let nums = [0,1,2,3,4];

function print(num){
    console.log(num);
}

nums.forEach(print);
nums.forEach(num => { //usually this would be nums.forEach(function (num) {..., but since we have a single modifier, then we can shorten it.
    console.log(`Num is ${num}`)
});
nums.forEach(num => console.log(`Num is ${num}`)); //shortest version

let sums = nums.map(num => {
    return num + 10;
});
console.log(sums);

sums = nums.map(num => num + 10); //doesn't require return if one line
console.log(sums);

let sum = nums.reduce((total, num) => total + num);
console.log(sums);

let sorted = nums.sort((a,b) => {
    if(a > b) {
        return -1; //when 1 and -1 are flipped, array counts from other end
    } else if(a < b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(sorted);

console.log(Math.PI);
console.log(Math.round(Math.random() *50) + 50);
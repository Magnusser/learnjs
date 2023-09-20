function hello(){
    console.log('hello');
}
let hello2 = function(){
    console.log('hello2');
}
let hello3 = () => {
    console.log('hello3');
}

let hello4 = () => console.log('hello4');

hello();
hello2();
hello3();
hello4();

let person = {
    name: 'Mag',
    age: '17',
    describe(){
        console.log('name: ' + this.name + ' age: ' + this.age);
    },
    describe2: () => {
        console.log('name: ' + this.name + ' age: ' + this.age);
    },
    describe3: function () {
        console.log('name: ' + this.name + ' age: ' + this.age);
    }
}

person.name = 'Marvin';
person.age = 43;

person.describe();
person.describe2();
person.describe3();
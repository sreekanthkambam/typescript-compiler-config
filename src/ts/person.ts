// Comments
const person = {
    name: 'Sreekanth',
    age: 30
};
console.log('Person Details - start ---------------');
console.log('Name: ' + person.name);
console.log('Age: ' + person.age);
console.log('Person Details - end ---------------');

// noImplicitAny, noUnusedLocals
function add(n1) {
    let sample;
    return n1 + 1;
}


// strictNullChecks, strictBindCallApply, noUnusedParameters, noImplicitReturns
function handler(message: string) {
    let hello = 'hello';
    if (hello.length > 10) {
        return 'Big String';
    }
    console.log('Handler');
}
const button = document.querySelector('button');
button.addEventListener('click', handler.bind(null, 'Hello'));

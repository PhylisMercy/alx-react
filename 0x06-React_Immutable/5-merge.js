import { List, Map } from 'immutable';

function concatElements(page1, page2) {
    return List([...page1, ...page2]);
}

function mergeElements(page1, page2) {
    return Map({...page1, ...page2});
}

export {concatElements, mergeElements}

// let list1 = [1, 2, 3]
// let list2 = [4, 5, 6]

// console.log(concatElements(list1, list2));

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356'
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// };

// console.log(mergeElements(person, job));

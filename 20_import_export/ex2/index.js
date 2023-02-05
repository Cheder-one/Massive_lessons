// import './index.css';

const myNumber = 42;

localStorage.setItem('number', myNumber.toString()) // записать el
localStorage.getItem('number') // получить el
localStorage.removeItem('number') // удалить el
localStorage.clear() // очистить полностью storage

// Работа с Объектами
const obj = {
   name: 'Max',
   age: 20,
}

localStorage.setItem('person', obj); 
  // person:"[object Object]"

localStorage.setItem('person', JSON.stringify(obj)) 
  // person:"{"name":"Max","age":20}"

const raw = localStorage.getItem('person') // typeof === string
console.log(raw.name); // undefined

const person = JSON.parse(raw);
console.log(person); // Object { name: "Max", age: 20 }

person.name = 'Vladilen'
console.log(person); // Object { name: "Vladilen", age: 20 }

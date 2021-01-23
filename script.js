
// //string 
// let message =  'hello world'; 
// //variable let
// //camelCase
// const meaningOFLife = 42; 
// //consts do not get reassigned!
// message = 'bye moon'; 
// console.log(message) ; 
// console.log(meaningOFLife);   
// ///Data types
// //string
// let a = 'ishaq'; 
// //int === number, integer
// let b = 200; 
// let int = 100; 
// //Array
// let array = [1,2,3,'ishaq', b]; 
// array[3] //ishaq
// array[5] = 'khan'; //mutating the array. added the end
// //arrays start at 0
// //Boolean
// let isOn = true; 
// let isOff = false;
// 1 == true; //double quals mean is equal to
// //Object 
// let myObject = {
//     key: 'value', 
//     name: 'khan', 
//     age: 27
// }
// myObject.job = 'Web developer'; 
// myObject.job // web developer; 


const second = document.getElementById('second'); 
const addButton = document.getElementById('addButton'); 
const multiplyButton = document.getElementById('multiplyButton'); 

addButton.addEventListener('click', function () {
    let number1, number2; 
    number1 = document.getElementById('number1').value; 
    number2 = document.getElementById('number2').value; 
    const answer = document.getElementById('answer'); 
    answer.textContent = addit(Number(number1),Number(number2)); 
})

multiplyButton.addEventListener('click', function () {
    let number1, number2; 
    number1 = document.getElementById('number1').value; 
    number2 = document.getElementById('number2').value; 
    const answer = document.getElementById('answer'); 
    answer.textContent = multiple(Number(number1), Number(number2)); 
})



function addit (num1, num2) {
    return num1 + num2; 
} 

function multiple(num1, num2) {
    return num1 * num2; 
}

fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
    return response.json()
}).then(data => {
    console.log(data.message)
})













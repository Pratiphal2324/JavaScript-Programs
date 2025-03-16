// let status = 'visible';
// func = function(element){
//     const ele = document.querySelector(element);
//     let status = ele.style.opacity == 0? 'non-visible':'visible';
//     ele.style.opacity = status=='visible'? 0:100;
//     const html = `
//     <div>
//         <button>Home</button>
//         <button>Contacts</button>
//     `
//     body.insertAdjacentHTML("afterbegin", html);
// }
// function abc(){
//     document.body.style.backgroundColor = `rgb(100,100,100)`;
// }
// const myfunc = function(){
//         const num2 = Number(document.querySelector(".n2").value);   
//         document.write(num1+num2);
//     }
// const num = document.querySelector(".n1").value;   
// const result = num.split('').reverse().join('');
// console.log(result);
// }
// const arr = [1, 'Technoblade', true];
// var arrType = []
// arr.forEach((i)=>{
//     arrType.push(typeof(i));
// })
// console.log(arr);
// console.log(arrType);

let input = prompt("Enter any sentence.");
input = input.toLowerCase();
let c = 0;
// input = input.split('');
// input.forEach(letter => {
//     if(letter == 'a'||letter == 'e'||letter == 'i'||letter == 'o'||letter == 'u'){
//         c++;
//     }
// });
// console.log(c);

// console.log(input);
// console.log("Length = " + input.length);
for (let i = 0; i < input.length; i++) {
    if(input[i] == 'a'||input[i] == 'e'||input[i] == 'i'||input[i] == 'o'||input[i] == 'u'){
        c++;
    }
}
console.log(c);
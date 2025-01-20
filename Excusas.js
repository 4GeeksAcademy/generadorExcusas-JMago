let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function randomRangeNumber(min, max){
  
    return Math.floor(Math.random() * (max - min) );
}

let quien= who[randomRangeNumber(0,4)];
let accion=action[randomRangeNumber(0,4)];
let que=what[randomRangeNumber(0,3) ];
let cuando =when[randomRangeNumber(0,5)];

let excusa = (quien+" ")+(accion+" ")+(que+" ")+(cuando+" ");


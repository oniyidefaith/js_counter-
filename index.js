const minus = document.getElementById('first_btn');
const plus = document.getElementById('sec_btn');
const par = document.getElementById('par')
const reset = document.querySelector('#reset')

// USING ARROW FUNCTION

plus.addEventListener('click', () =>{
 par.innerHTML++
})
minus.addEventListener('click', () => {
    par.innerHTML--;
});
reset.onclick = function (){
    par.innerHTML = 0
}


// USING FUNCTION EXPRESSION 

// minus.onclick = function(){
//     par.innerHTML--;
// }

// plus.onclick = function (){
//     par.innerHTML++
// }

// reset.onclick = function(){
//     par.innerHTML = 0
// }
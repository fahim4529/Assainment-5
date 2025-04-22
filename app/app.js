document.getElementById("btn-complete-1").addEventListener('click', function(){
    // console.log('hey boss')
    alert('Board update successfully')
});

document.getElementById("btn-complete-2").addEventListener('click', function(){
    // console.log('hey boss')
    alert('Board update successfully')
    
});
document.getElementById("btn-complete-3").addEventListener('click', function(){
    // console.log('hey boss')
    alert('Board update successfully')
    
});
document.getElementById("btn-complete-4").addEventListener('click', function(){
    // console.log('hey boss')
    alert('Board update successfully')
    
});
document.getElementById("btn-complete-5").addEventListener('click', function(){
    // console.log('hey boss')
    alert('Board update successfully')
    
});
document.getElementById("btn-complete-6").addEventListener('click', function(){
    // console.log('hey boss')
    alert('Board update successfully')
    
});




document.getElementById("btn-complete-1").addEventListener('click',function(event){
event.preventDefault();
const newNumber =document.getElementById('new-number-2').innerText;
const convertednewNumber =parseFloat(newNumber);
const sum =convertednewNumber-newNumber;
document.getElementById('newNumber').innerText=sum;


});

// o work here color and them


const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightgray', 'lavender'];
let index = 0;

document.getElementById('changeColorBtn').addEventListener('click', function () {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});

const newNumber = document.getElementById('new-number-2');

const mainNumber = document.getElementById('new-number');

const completeBtn =document.getElementById('btn-complete-1');


// i work here clear history
// window.location.href="./newPage.html"

document.getElementById('Discover').addEventListener('click', function(event){
   window.location.href="./new.html" 
});



document.getElementById("back").addEventListener("click", function () {
  window.location.href = "./index.html";
});



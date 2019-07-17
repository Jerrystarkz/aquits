
// get modal element
var modal = document.getElementById('SimpleModal');

// get modal btn element
var modalBtn = document.getElementById('modalBtn');

// get close element
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for  open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);

//function open modal
function openModal(){
    modal.style.display ='block';

}

//function close modal
function closeModal(){
    modal.style.display ='none';

}

//function close modal
function outsideClick(e){

if(e.target==modal){
    modal.style.display ='none';    
   }
}
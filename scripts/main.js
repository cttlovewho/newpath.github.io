let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/myfamily2.png'){
        myImage.setAttribute('src', 'images/OurFamily.jpg');
    }else{
    myImage.setAttribute('src','images/myfamily2.png');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('your name pls');
    if( !myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = myName +'这一家，'
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '这一家';
  }


myButton.onclick = function() {
    setUserName();
 }

// Schimb culoarea ecranului, dupa ce las jum de secunda culoarea scrisului
setTimeout(function(){ document.body.style.backgroundColor = "#ffdd99";}, 500);

var culori1 = ['#ffcc99', 'pink', '#ff9999', '#ffcccc'];
var culori2 =['#ff80aa', 'purple'];
var culori = culori1.concat(culori2);
culori.pop();
culori.push('#ffffcc');

var prevcol = "";
var mycolor = setInterval(function(){index = Math.floor(Math.random()*6);
				while(prevcol== culori[index])
					index = Math.floor(Math.random()*6)
					document.body.style.backgroundColor = culori[index];
					prevcol = culori[index];},5000);
		
// Buton care sa selecteze culoarea actuala	apoi dispare
var btn = document.createElement("BUTTON");
document.body.appendChild(btn);
btn.setAttribute("id","buton");
btn.style.left = "7px";
btn.style.top = "1px";
btn.style.position = "absolute";
btn.style.backgroundColor = "#ffdd99";
btn.style.color = "#4d0017";
btn.style.borderRadius = "0.7rem";
btn.style.font = "Comic Sans MS"
btn.innerHTML = "Vreau culoarea asta";

function mystopfunction(){	
  clearInterval(mycolor);
}

function Calls1(){
  mystopfunction();
  document.getElementById("buton").remove();
}

document.getElementById("buton").onclick = Calls1;

// Buton care schimba culoarea celui de al 3-lea buton
document.getElementsByTagName("BUTTON")[2].style.backgroundColor = "#ffffcc";

// Schimba cursorul cand checkboxul nu e bifat
var checker = document.getElementById('exampleCheck1');
var sendbtn = document.getElementById('submit');
checker.onchange = function() {
    sendbtn.disabled = !this.checked;
	if (this.checked !== false){
		 sendbtn.style.cursor = "default"; 
	 }
	 
	 if (this.checked === false){
		 sendbtn.style.cursor = "not-allowed"; 
	 }
 };
 
 // Pentru reset
 function myReset() {
  var r = confirm("Are you sure you want to reset all text?");
  if (r === true) {
    document.getElementById("myForm").reset();
  }
}
document.getElementById("resett").onclick = myReset;

// Validari folosind regex
function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.exampleInputEmail1.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function ValidatePass() 
{
 if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(myForm.exampleInputPassword1.value))
  {
    return (true)
  }
    alert("You have entered an invalid password!")
    return (false)
}

function Calls(){
	ValidateEmail();
	ValidatePass();
}
document.getElementById("submit").onclick = Calls;


// Submit cu enter; functie care asculta pentru click
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submit").click();
  }
});


// Functie care asculta pt tasta apasata
let div1 = document.createElement("div");
div1.style.backgroundColor = "black";
div1.style.width = "100%";
div1.style.height = "100%";
div1.style.position = "fixed";
div1.style.top = "0";
div1.style.left = "0";
div1.style.opacity = "0";
div1.style.zIndex = "-1";
document.body.appendChild(div1);

var isKeyPressed = false;

function keyPress (e) {
    if(e.key === "Escape") {
        if (!isKeyPressed) {
            div1.style.opacity = "0.8";
            div1.style.zIndex = "1";
            isKeyPressed = true;
        } else {
            div1.style.opacity = "0";
            isKeyPressed = false;
            div1.style.zIndex = "-1";
        }
        return 0;
    }
}

document.body.addEventListener("keydown", keyPress);















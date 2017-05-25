var signup = document.getElementById("bInscribete");
signup.addEventListener("click",function(){
	alert("Chicas que cambian el Mundo")
});

var hackathon=document.getElementById("bhack");
hackathon.addEventListener("click",function(){
	document.getElementById("love").style.float="right";
});

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var subject=document.getElementById("subject").value;
var message=document.getElementById("message").value;
var send=document.getElementById("submit");
send.addEventListener("click",validate);
/*funcion validadora de todos los campos*/
function validate(){
	

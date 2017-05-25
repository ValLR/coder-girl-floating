var signup = document.getElementById("bInscribete");
signup.addEventListener("click",function(){
	alert("Chicas que cambian el Mundo")
});

var hackathon=document.getElementById("bhack");
hackathon.addEventListener("click",function(){
	document.getElementById("love").style.float="right";
});


/*funcion validadora de todos los campos*/

var send= document.getElementById("submit");
send.addEventListener("click", validate);

function validate(){
		function nameForm(){
		var inputName= document.getElementById("name").value;
		if(inputName.length==0){
			alert("Ingresa tu nombre");
		}
		else if(inputName.charAt(0) != inputName.charAt(0).toUpperCase()){
			alert("Escribe la letra inicial de tu nombre con mayúscula");
		}
	}
	nameForm();

	function emailForm(){
		var inputEmail=document.getElementById("email").value;
		var validEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(inputEmail.length==0){
			alert("Ingresa tu e-mail")
		}
		else if(!validEmail.test(inputEmail)){
			alert("E-mail inválido, inténtalo de nuevo")
		}
	}
	emailForm();

	function subjectForm(){
		var inputSubject=document.getElementById("subject").value;
		if(inputSubject.length==0){
			alert("Ingresa tu asunto");
		}
	}
	subjectForm();

	function messageForm(){
		var inputMessage = document.getElementById("message").value;
		if(inputMessage.length == 0){
			alert("Ingresa un mensaje")
		}
		else if(inputMessage.length>=100){
			alert("Sólo puedes ingresar hasta 100 caracteres")
		}
	}
	messageForm();
}

function login(){
    //Primero declaramos las variables 
    let usuario, pass;
    //Luego le decimos que las variables serán traidas por un id, y al final le asigamos 
    usuario=document.getElementById("nombreuser").value;
    pass=document.getElementById("contra").value;
    //Creamos una condición 
    if(usuario=="JosephCibertec" && pass=="admin"){
        window.location.href="../HTML/arriola.html";
    }else{
        alert("Usuario o nombre incorrectos, intentélo de nuevo");
    }
}

function recover(){
    let email; 

    email=prompt(alert("Ingrese su correo de recuperación"))
    alert("Se acaba de mandar un correo a: "+email+". " +"Revise su correo para activar su cuenta")
}
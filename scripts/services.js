//constructor
function Service(){

}
//use jquery
function register(){
    console.log("Registering services");
}

function init(){
    //hook events
    $("#btnRegister").on("click", register);
}

window.onload = init;
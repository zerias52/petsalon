// Create another page named services.html and create another form to register services (description, price).
// Create the constructor for the services objects.
//  Create validations and notifications for the new form using jQuery.
//  Clear the form after the registration of the services using jQuery.

let services = []

// constructor
function Service(description, price){
    this.description = description;
    this.price = price;
}

//validations
function validService(service){
    let validDescription = true
    let validPrice = true

    if (service.description == ""){
        validDescription = false
        $("#txtDescription").addClass("error");
        $("#descRequiredText").show()
    }else{
        validDescription = true
        $("#txtDescription").removeClass("error");
        $("#descRequiredText").hide()
    }
    if (service.price == ""){
        validPrice = false
        $("#txtPrice").addClass("error");
        $("#priceRequiredText").show()
    }else {
        validPrice = true
        $("#txtPrice").removeClass("error");
        $("#priceRequiredText").hide()
    }
    return validDescription && validPrice;
}

//use jquery
function register(){

    let newService = new Service($("#txtDescription").val(), $("#txtPrice").val());
    if (validService(newService) === true){
        services.push(newService);
        console.log(services);
        $("#txtDescription").val("")
        $("#txtPrice").val("")
    }else{
        console.log("Invalid Service");
    }

}

function init(){
    //hook events
    $("#btnRegister").on("click", register);

    $("#descRequiredText").hide()
    $("#priceRequiredText").hide()
}


window.onload = init;
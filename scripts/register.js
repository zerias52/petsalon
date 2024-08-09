let pets=[];//pets array

function Pet(name, age, gender, breed, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

function isValid(pet){
    let validation = true
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");
    let inputBreed = document.getElementById("txtBreed");

    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputBreed.classList.remove("error");

    if (pet.name == ""){
        validation = false
        inputName.classList.add("error");
    }
    if (pet.age == ""){
        validation = false
        inputAge.classList.add("error");
    }
    if (pet.breed == ""){
        validation = false
        inputBreed.classList.add("error");
    }
    return validation;
}

function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);

    if(isValid(newPet)==true){
        pets.push(newPet);
        displayRow()
    }

}

function deletePet(id){
    console.log("Deleting " + id);
    document.getElementById(id).remove();
    pets.splice(id, 1);
    displayRow()
}

function init(){
    let pet1= new Pet("Scooby", 10, "M", "Mixed", "Nail Trim")
    let pet2= new Pet("Scrappy", 2, "M", "Mixed", "Groom")
    let pet3= new Pet("Paws", 4, "F", "Calico", "Groom + Style")
    let pet4= new Pet("Tweet", 1, "F", "Canary", "Full Package")
    pets.push(pet1,pet2,pet3,pet4);
    displayRow()
}

window.onload = init;
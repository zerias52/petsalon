let pets=[];//pets array

function Pet(name, age, gender, breed){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
}

function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputGender = document.getElementById("txtGender").value;
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed);

    pets.push(newPet);
    displayRow()
}

function init(){
    let pet1= new Pet("Scooby", 10, "M", "Mixed")
    let pet2= new Pet("Scrappy", 2, "M", "Mixed")
    let pet3= new Pet("Paws", 4, "F", "Calico")
    let pet4= new Pet("Tweet", 1, "F", "Canary")
    pets.push(pet1,pet2,pet3,pet4);
    displayRow()
}

window.onload = init;
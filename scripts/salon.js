let zeek = {
    name: "Zeek",
    age: 4,
    gender: 'male',
    service: "Nail Trim",
    breed: "Retriever"
}
let paws = {
    name: "Paws",
    age: 1,
    gender: 'female',
    service: "Wash",
    breed: "Siamese"
}
let hera = {
    name: "Hera",
    age: 2,
    gender: 'female',
    service: "Styling",
    breed: "Labrador"
}

let pets = [zeek, hera, paws]

function updatePetCount() {
  const petCountElement = document.getElementById("petCount");
  petCountElement.textContent = pets.length;
}
updatePetCount()

function petList(){
    const petList = document.getElementById("pet-list");

    for (let i=0; i < pets.length; i++) {
        let petName = document.createElement("li");
            petName.textContent = pets[i].name

        petList.appendChild(petName);
    }
}
petList()

function averagePetAge(){
    let total = 0
    for (let i=0; i < pets.length; i++) {
        total += pets[i].age
    }
    return total / pets.length

}
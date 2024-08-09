function updatePetCount() {
  const petCountElement = document.getElementById("petCount");
  petCountElement.textContent = pets.length;
}


function displayRow(){
    let table = document.getElementById("pets");
    let row =""
    table.innerHTML =""
    //travel the array
    for (let i=0; i < pets.length; i++){
        let pet =pets[i]
    //create the template
    row +=`
    <tr id="${i}">
        <td>${i+1}</td>
        <td>${pets[i].name}</td>
        <td>${pets[i].age} </td>
        <td>${pets[i].gender}</td>
        <td>${pets[i].breed}</td>
        <td>${pets[i].service}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
    </tr>
    `

    //display the row on the html
    updatePetCount()
    table.innerHTML = row
    }
}

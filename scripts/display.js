function displayRow(){
    let table = document.getElementById("pets");
    let row =""
    table.innerHTML =""
    //travel the array
    for (let i=0; i < pets.length; i++){
    //create the template
    row =`
    <tr>
        <td>${pets[i].name}</td>
        <td>${pets[i].age} </td>
        <td>${pets[i].gender}</td>
        <td>${pets[i].breed}</td>
    </tr>
    `

    //display the row on the html
    table.innerHTML += row
    }
}
//add this script to html
function save(item){
    //get the LS items
    let list = read();
    //push the new item
    list.push(item);
    console.log(list);
    //parse into string
    let val=JSON.stringify(list)
    localStorage.setItem('services', val);
}

function read(){
    //read the local storage
    let data = localStorage.getItem('services');

    if(!data){
        return []
    }else{
       //parse it back into an array/obj
    let list = JSON.parse(data);
    //return the obj
    return list
    }
}

function getServices(){
    //get the list from the LS
    let servicesArray = read()

    let options
    //travel the array of services
    for(i=0;i < servicesArray.length;i++){
        //create the HTML <option>
        options+=`
        <option value=${servicesArray[i].description}>${servicesArray[i].description}</option>
        `
    }
    $("#txtService").append(options)
}
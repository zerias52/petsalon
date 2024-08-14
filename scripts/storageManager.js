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
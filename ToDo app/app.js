


function add_items(){
    var item = document.getElementById("items");

//    CREATE LIST  //
    var LI = document.createElement('li');
    LI.setAttribute("class", "list")
    var liText = document.createTextNode(item.value);
    LI.appendChild(liText);
    document.getElementById("list").appendChild(LI);

// CREATE DEL BUTTON   //
    var delbt = document.createElement('button');
    var delText = document.createTextNode("REMOVE");
    delbt.setAttribute("class", "but");
    delbt.setAttribute("onclick", "delete_item(this)");
    delbt.appendChild(delText);
    LI.appendChild(delbt);


// CREATE EDIT BUTTON   //
    var edbt = document.createElement('button');
    var edText = document.createTextNode("EDIT");
    edbt.setAttribute("class", "but");
    edbt.setAttribute("onclick", "edit_item(this)");
    edbt.appendChild(edText);
    LI.appendChild(edbt);
}


function delete_item(p){
    p.parentNode.remove();
}

function edit_item(p){
    var val = p.parentNode.firstChild.nodeValue;
    var editVal = prompt("EDIT TODO ITEM", val);
    p.parentNode.firstChild.nodeValue = editVal;
}

function del(){
    document.getElementById("list").innerHTML = "";
}
   


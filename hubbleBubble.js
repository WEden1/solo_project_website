function submitHandler(form) {

    let ingredients = {}

    for(element of form.elements){
        ingredients[element.id] = element.value;
    }
    console.log(ingredients);

    const req = new XMLHttpRequest();
    req.open('POST', "http://35.235.61.37:9000/ingredient")
    req.onload = () => {

        if (req.status >= 200 && req.status <= 300) {
            console.log("success");
        } else {
            console.log("Fail!!")
        }
    }
    req.setRequestHeader('Content-type', "application/json");
    req.send(JSON.stringify(ingredients));
    return false;
}

function createTable(){

    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
}

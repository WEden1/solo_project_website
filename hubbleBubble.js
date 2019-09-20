function submitHandler(form) {

    let ingredients = {}

    for (element of form.elements) {
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

function getIngredients(){
    const req = new XMLHttpRequest();
    req.open('GET', "http://35.235.61.37:9000/ingredient")
    req.onload = () => {

        if (req.status >= 200 && req.status <= 300) {
            console.log("success");
            var json = JSON.parse(req.responseText);
            console.log(json);
            let data = {};
            for (element of json) {
                data[element.id] = element.value;
            }
        } else {
            console.log("Fail!!")
        }

        var select = document.getElementById('selectPotion');

        console.log(select.selectindex);
        
        createTable(data['id'], data['ingredient1'], data['ingreient2'], data['ingredient3'])
    }
    req.setRequestHeader('Content-type', "application/json");
    req.send();

    

    return false;

} 

function createTable(id, ingredient1, ingredient2, ingredient3) {

    var table = document.getElementById("table1");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = id;
    cell2.innerHTML = ingredient1;
    cell3.innerHTML = ingredient2;
    cell4.innerHTML = ingredient3;

}
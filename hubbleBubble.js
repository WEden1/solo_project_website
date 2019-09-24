function getPotions(){

    const req = new XMLHttpRequest();
    req.open('GET', "http://localhost:9000/spells")
    req.onload = () => {

        if (req.status >= 200 && req.status <= 300) {
            console.log("success");
            var json = JSON.parse(req.responseText);
            console.log(json);
            
            
            let data1 = {};
            for (let i = 0; i<json.length;i++) {
                data1[i] = json[i];
                console.log(data1[i])
                createPotionsTable(data1[i]);
            }
           

        } else {
            console.log("Fail!!")
        }
    }
    req.setRequestHeader('Content-type', "application/json");
    req.send();
    return false;
}


function submitHandler(form) {

    let ingredients = {}

    for (element of form.elements) {
        ingredients[element.id] = element.value;
    }
    console.log(ingredients);

    const req = new XMLHttpRequest();
    req.open('POST', "http://localhost:9000/ingredients")
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

function getIngredients() {
    const req = new XMLHttpRequest();
    req.open('GET', "http://localhost:9000/ingredients")
    req.onload = () => {

        if (req.status >= 200 && req.status <= 300) {
            console.log("success");
            var json = JSON.parse(req.responseText);
            console.log(json);
            
            
            let data2 = {};
            for (let i = 0; i<json.length;i++) {
                data2[i] = json[i];
                console.log(data2[i])
            }

            var select = document.getElementById('selectPotion');
            selectId = select.selectedIndex;
            createIngredientsTable(data2, selectId);

        } else {
            console.log("Fail!!")
        }
    }
    req.setRequestHeader('Content-type', "application/json");
    req.send();
    return false;

}

async function createPotionsTable(data1) {

    var table = document.getElementById("potionTable");

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        console.log(data1)
        cell1.innerHTML = data1.id
        cell2.innerHTML = data1.spell;
        cell3.innerHTML = data1.description;
}

function createIngredientsTable(data2, selectId) {

    var table = document.getElementById("ingredientsTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = data2[selectId].id
    cell2.innerHTML = data2[selectId].potion;
    cell3.innerHTML = data2[selectId].ingredient1;
    cell4.innerHTML = data2[selectId].ingredient2;
    cell5.innerHTML = data2[selectId].ingredient3;

}
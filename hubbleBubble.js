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



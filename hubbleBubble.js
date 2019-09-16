function submitHandler(form) {

    let ingredients = [];
    //a com

    for(element of form.elements){
        ingredients[element.id] = element.value;
    }

    const req = new XMLHttpRequest();
    req.open('POST', "http://35.204.118.105:9000/ingredient")
    req.onload = () => {

        if (req.status >= 200 && req.status <= 300) {
            console.log("success");
        } else {
            console.log("Fail!!")
        }
    }
    req.setRequestHeader();
    req.send(JSON.stringify(ingredients));
    return false;
}

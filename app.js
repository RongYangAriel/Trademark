// Show what user type in input are
function showResult(){
    var result = document.getElementById("fcompany").value;
    document.getElementById("service-txtOutput").value = result;
}

// Show the images user choose
function showImg(){
    let img = document.getElementById("img-upload").files;
    let container = document.getElementById("img-output");
    container.src = URL.createObjectURL(img[0]);
    console.log(img);
}


// Fetch from server
function getText(){
    fetch('http://127.0.0.1:5000/')
    .then(response => {
        return response.json();
    })
    .then(text => {
        console.log(text);
        displayText(text);
    })
}

function displayText(text){
    document.getElementById("output-4-1").innerHTML = text;
}

// POST data to server
function postText(){
    fetch('http://127.0.0.1:5000/',{
        method: 'POST',
        body: {
            "x": 5
        }
    
    }).then(response => {
        return response.json();
    })
    
}
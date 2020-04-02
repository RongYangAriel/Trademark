// import { isFlow } from "@babel/types";
// import { powderblue } from "color-name";


//Service-1 output
document.getElementById('service-submit').addEventListener("click",output1);

function output1(){
    // check input area is not empty
    let input = document.getElementById('fcompany').value;
    if (input !== ''){
        //display output
        document.getElementById('output-1-1').innerHTML = "Class 43";
        document.getElementById('output-1-2').innerHTML = 'accommodation, hotel, services'; 
    }
}

//Service-2 output

// document.getElementById('img-upload').addEventListener("onchange", output2(event));

function output2(event){
    let output = document.getElementById('blah');
    output.src = URL.createObjectURL(event.target.files[0]);
}


//Service-3 output
function output3(){
    let input1 = document.getElementById('company-name-1').value;
    let input2 = document.getElementById('company-name-2').value;
    if ((input1 !=='') && (input2 !=='')){
        document.getElementById('output-3-1').innerHTML = 
        "Stream (Context)<br>Flow (Relationship)<br>Current (Relationship)<br>pour (Relationship)";
        document.getElementById('output-3-2').innerHTML = 
        "54% common characters STREAMWOR";
    }
}

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


// // Fetch from server
// function getText(){
//     fetch('http://127.0.0.1:5000/')
//     .then(response => {
//         return response.json();
//     })
//     .then(text => {
//         console.log(text);
//         displayText(text);
//     })
// }

// function displayText(text){
//     document.getElementById("output-4-1").innerHTML = text;
// }

// // POST data to server
// function postText(){
//     fetch('http://127.0.0.1:5000/',{
//         method: 'POST',
//         body: {
//             "x": 5
//         }
    
//     }).then(response => {
//         return response.json();
//     })
    
// }
//Service-1 output

document.getElementById('submit-1').addEventListener("click",output1);

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

// preview upload image
document.getElementById('select-2').addEventListener("change", function(){
    let output = document.getElementById('input-img-2');
    let imgURL = URL.createObjectURL(event.target.files[0]);
    output.src = imgURL;
});
//submit image
document.getElementById('submit-2').addEventListener('click',function(){
    if (document.getElementById('input-img-2').src !== '' ){
        let output1 = document.getElementById("img-2-1");
        let output2 = document.getElementById("img-2-2");
        let caption1 = document.getElementById('caption-2-1');
        let caption2 = document.getElementById('caption-2-2');
        output1.src = "../image/auto-logo.jpg";
        output2.src = '../image/azuma-logo.png';
        caption1.innerHTML = 'Simlarity 75%';
        caption2.innerHTML = 'Simlarity 90%';
    }
});





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



//Service4 

//Service 4 show upload image
document.getElementById('select-4').addEventListener("change", function(){
    let output = document.getElementById('input-img-4');
    output.src = URL.createObjectURL(event.target.files[0]);
});         
// Service 4 show result
document.getElementById('submit-4').addEventListener('click',function(){
    if(document.getElementById('input-img-4').src !==''){
        let output = document.getElementById("img-4");
        output.src = '../image/adidas-edited.png';
        let caption = document.getElementById('caption-4');
        caption.innerHTML = "Extracted Logo";
    }
}); 





//Service-5 output
document.getElementById('submit-5').addEventListener('click',function(){
    document.getElementById("output-5").innerHTML="Cofusion";
});



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

const navSlide = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-links');
    //Toggle Mobile Nav
    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}
const closeNav = () =>{
    $(document).addEventListener('click',() =>{
        nav.classList.toggle('nav-disactive');
    });
}

const app = () =>{
    navSlide();
    closeNav();
}

app();
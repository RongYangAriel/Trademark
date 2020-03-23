function showResult(){
    var result = document.getElementById("fcompany").value;
    document.getElementById("service-txtOutput").value = result;
}

function showImg(){
    let img = document.getElementById("img-upload").files;
    let container = document.getElementById("img-output");
    container.src = URL.createObjectURL(img[0]);
    console.log(img);
}
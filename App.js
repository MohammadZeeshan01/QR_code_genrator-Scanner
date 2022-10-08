function onclick (){
let values = document.getElementById("input").value
localStorage.setItem("value",values)
    window.open("qr.html", "_blank");
}


// function go (){
//     window.open("qrScanner.html", "_blank");

// }
// document.getElementById("go").addEventListener("click", onclick)

document.getElementById("submit").addEventListener("click", onclick)

function login(event) {
    event.preventDefault();

    let username = "srijeevesh123@gmail.com";
    let password = "Jeevesh@143";

    let name = document.getElementById("mail").value;
    let pass = document.getElementById("pin").value;

    if(name === username && pass === password){
        document.getElementById("output").innerHTML = "";
        showPopup();

        setTimeout(()=>{
           window.location.href = "https://srijeevesh142-coder.github.io/Book-my-PG/";
        },2000);
    }
    else{
        document.getElementById("output").innerHTML = "Invalid E-Mail or Password";
        output.style.color = "red";
    }

    document.getElementById("mail").value = "";
    document.getElementById("pin").value = "";
}

function showPopup(){
  document.getElementById("popup").style.display="flex";
}

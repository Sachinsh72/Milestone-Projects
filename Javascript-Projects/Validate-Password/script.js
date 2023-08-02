//pick the form
const submit = document.getElementById("login-form");

//after submitting
submit.addEventListener("submit",(event)=>{
    event.preventDefault();
    const email =  document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errMessage = document.getElementById("err-message");
    const validMessage = document.getElementById("valid-message");

    if(email.indexOf("@") === -1 || password.length < 8){
        errMessage.style.display = "block";
        validMessage.style.display = "none"
    }else{
        errMessage.style.display = "none";
        validMessage.style.display = "block"
    }
});
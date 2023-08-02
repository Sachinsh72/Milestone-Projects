const Email =  document.getElementById("email").value;
const Password = document.getElementById("password").value;
const Submit = document.getElementById("login-form");
const errMessage = document.getElementById("err-message");
const validMessage = document.getElementById("valid-message")

const pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
Submit.addEventListener("submit",(pre)=>{
    pre.preventDefault();
    if(Email.indexOf("@") == -1 || Password.length < 8){
        errMessage.style.display = "block";
        validMessage.style.display = "none"
    }else{
        errMessage.style.display = "none";
        validMessage.style.display = "block"
    }
})
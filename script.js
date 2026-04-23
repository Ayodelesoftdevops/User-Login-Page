alert('Welcome To The Home Page');

const form = document.getElementById('myform');

form.addEventListener('submit', function(event){
    event.preventDefault();

//fectch form value
const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();

//Clear Previous Errors
document.getElementById('usernameError').innerText='';
document.getElementById('passwordError').innerText='';
let isValid = true;

//Validate Username
if (username === ''){
    document.getElementById('usernameError').innerText = 'username is required'
    isValid = false;
}else if(username.length<3){
    document.getElementById('usernameError').innerText = 'username must be atleast 3 characters'
    isValid = false;
}

//Validate Password
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
if(password === ''){
    document.getElementById('passwordError').innerText = 'password is required'
    isValid = false;
}else if(!passwordPattern.test(password)){
    document.getElementById('passwordError').innerText = 'password must be atleast 8 characters including letters,numbers and symbols'
    isValid = false;
};

})

if (isValid){
    alert("Login successful ✅");
    window.location.href = "home.html"; // redirect
}
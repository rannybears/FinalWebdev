const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


let validUser = ""; 
let validEmail = "";
let validPass = ""; 


function registerUser() {
    const username = document.getElementById('regUserName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const messageElement = document.getElementById('registerMessage');

    if (!username || !email || !password) {
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.textContent = "Please enter a valid email address.";
        return;
    }

    validUser = username;
    validEmail = email;
    validPass = password;

    messageElement.classList.remove('error');
    messageElement.classList.add('success');
    messageElement.textContent = "Registration successful! You can now log in.";
}


function verifyLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const messageElement = document.getElementById('loginMessage');

    if (!email || !password) {
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.textContent = "Please enter your email and password.";
        return;
    }

    if (email === validEmail && password === validPass) {
        messageElement.classList.remove('error');
        messageElement.classList.add('success');
        messageElement.textContent = "Login successful! Redirecting...";      
        
        setTimeout(() => {
            window.location.href = "home1.html";
        }, 1500);
    } else {
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.textContent = "Invalid email or password.";
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
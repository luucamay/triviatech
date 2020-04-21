const loginView = document.getElementById('loginView');
const loadingView = document.getElementById('loadingView');
const homeView = document.getElementById('homeView');
const name = document.getElementById('name');
const loginBtn = document.getElementById('loginBtn');

const login = function () {
    if (name.value === "") {
        window.alert("Please enter your name") // TODO change this 
    } else {
        loginView.classList.add("hide");
        homeView.classList.remove("hide");
    }
}

loginBtn.addEventListener("click", login);

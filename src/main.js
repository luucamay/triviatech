const loginView = document.getElementById('loginView');
const loadingView = document.getElementById('loadingView');
const homeView = document.getElementById('homeView');
const name = document.getElementById('name');
const loginBtn = document.getElementById('loginBtn');
const username = document.getElementById('username');

const goHomeView = function () {
    username.innerHTML = name.value;
    loadingView.classList.add("hide");
    homeView.classList.remove("hide");
}
const login = function () {
    if (name.value === "") {
        window.alert("Please enter your name") // TODO change this 
    } else {
        loginView.classList.add("hide");
        loadingView.classList.remove("hide");
        setTimeout(goHomeView, 1000); // TODO work with loading bar
    }
}

loginBtn.addEventListener("click", login);


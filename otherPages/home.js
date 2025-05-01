
window.onload = function(){
    if (localStorage.getItem("isLoggedIn") !== "true"){
        window.location.href = "../index.html";
    }
}
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    
    const userName = user.user_Email;

    document.getElementById("user_Name").innerHTML = `${userName}`;
    document.getElementById("offcanvasDarkNavbarLabel").innerHTML = `${userName}`;
    
    function logout(){
        window.location.href = "../index.html";
        localStorage.removeItem("loggedInUser");
    }
    
    

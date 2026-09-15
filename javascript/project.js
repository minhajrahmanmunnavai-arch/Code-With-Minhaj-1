const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const closeBtn = document.getElementById("closeBtn");

signUpBtn.onclick = () => {
    signUpPopup.style.display = "flex";
    console.log("buttonl clicked")
};

closeBtn.onclick = () => {
    signUpPopup.style.display = "none";
};
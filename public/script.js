// // signin code

// function signin(){
// event.preventDefault();

// var emailArray=[];
// var passwordArray=[];

// var email = document.getElementById("se").value;
// var password= document.getElementById("sp").value;

// var i = emailArray.indexOf(email);

// if(emailArray.indexOf(email) == -1){
// if (email == ""){
//     alert("Email required.");
//     return ;
// }
// alert("Email does not exist.");
// return ;
// }
// else if(passwordArray[i] != password){
// if (password == ""){
//     alert("Password required.");
//     return ;
// }
// alert("Password does not match.");
// return ;
// }
// else {
// alert(email + " yor are login Now");

// document.getElementById("se").value ="";
// document.getElementById("sp").value="";
// return ;
// }}


// // New password function code java
// function validateForm() {
//     var newPassword = document.getElementById("newPassword").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     if (newPassword !== confirmPassword) {
//         document.getElementById("errorText").innerHTML = "Passwords do not match!";
//         return false;
//     } else {
//         document.getElementById("errorText").innerHTML = "";
//         return true;
//     }
// }

// // signup code java



// function signup(){
//     event.preventDefault();

//     var fullnameArray=[];
//     var emailArray=[];
//     var passwordArray=[];

//     var fullname = document.getElementById("spn").value;
//     var email = document.getElementById("spe").value;
//     var password = document.getElementById("spp").value;

//     if (fullname == ""){
//         alert("FullName required.");
//         return ;
//     }
//     else if (email == ""){
//         alert("Email required.");
//         return ;
//     }
//     else if (password == ""){
//         alert("Password required.");
//         return ;
//     }
//     else if(fullnameArray.indexOf(fullname) == -1){
//         fullnameArray.push(fullname);
//         emailArray.push(email);
//         passwordArray.push(password);

//         alert(fullname + "  Thanks for registration. \nTry to login Now");

//         document.getElementById("spn").value ="";
//         document.getElementById("spe").value="";
//         document.getElementById("spp").value="";
//     }
//     else{
//         alert(fullname + " is already register.");
//         return ;
//     }
// }

// // Forgot password code java

//     document.addEventListener("DOMContentLoaded", function () {
//     const forgotPasswordForm = document.getElementById("forgotPasswordForm");
//     const messageDiv = document.getElementById("message");

//     forgotPasswordForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         // Get the entered email address
//         const email = document.getElementById("email").value;

//         // You can add your own logic here to send a reset link to the email address.
//         // For simplicity, we'll just display a message here.

//         messageDiv.innerHTML = `A password reset link has been sent to ${email}.`;
        
//     });
// });
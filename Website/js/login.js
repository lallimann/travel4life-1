$(document).ready(function(){
  $("#login").click(function(){
    signIn();
  });
});



function signIn()
{
  var email = $("#email").val();
  var pass = $("#password").val();

  firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user) {

    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href = "profile.html";
    // User is signed in.
  } else {
    // No user is signed in.
  }
});


   // user signed in
}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
});
}

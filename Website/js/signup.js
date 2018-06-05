$(document).ready(function(){
  $("#signUp").click(function(){
    saveUser();
  });
});

function saveUser()
{
  var email = $("#email").val();
  var name = $("#name").val();
  var pass = $("#password1").val()
  ;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(function(user) {

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              var root = firebase.database().ref();
              var uid = user.uid;
              var data = {
                email: email,
                name: name,
                id:uid
              }

              var userRoot = root.child("Users");
              var basicRoot = userRoot.child("basics");
            //  userRoot.child(uid).set(data);
              basicRoot.child(uid).set(data).then(function(ref) {//use 'child' and 'set' combination to save data in your own generated key
              alert(uid+" id Signup successful");
              window.open("../views/login.html", "_self");
            }, function(error) {
                console.log(error);
            });


            } else {
              // No user is signed in.
            }

        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else if (errorCode == 'auth/email-already-in-use') {
                alert('The email is already taken.');
            } else if (errorCode == 'auth/weak-password') {
                alert('Password is weak');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });


});
}

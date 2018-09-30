$(document).ready(function(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      if(user!=null)
      {
        var root = firebase.database().ref();
        var uid = user.uid;
        var userRoot = root.child("Users")
        var basicRoot = userRoot.child("basics").child(uid);


        basicRoot.on('value', snap =>{
          var userDataJSON = snap.val();
          if(userDataJSON.profilePic != null)
          {
            $('#dp')
                .attr('src', userDataJSON.profilePic);
          }
          if(userDataJSON.rewardP != null)
          {
            $('#points').text(userDataJSON.rewardP + " Reward points");
          }
          document.getElementById("nameSide").innerHTML = userDataJSON.name ;

        });

      //  var node = document.createElement("LI");
        var postsRoot = userRoot.child("posts");
        var uidRoot = postsRoot.child(uid);

        uidRoot.on('value', snap =>{
          var userDataJSON = snap.val();
          for(imgID in userDataJSON)
          {
            var imageRoot = uidRoot.child(imgID);

            imageRoot.on('value', snap =>{
              var userDataJSON = snap.val();
              if(userDataJSON.postPic != null)
              {
                var DOM_img = document.createElement("img");
                DOM_img.src = userDataJSON.postPic;
                DOM_img.width = "700";
                document.getElementById("myFeedsList").appendChild(DOM_img);
              }
            });
          }

        });

      }
    } else {
      // No user is signed in.
    }
  });

  $("#logout").click(function(){
    logout();
  });
  $("#changeP").click(function(){
    var user = firebase.auth().currentUser;
    var email = "";
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      email = profile.email;
    });
  }
  var auth = firebase.auth();
  auth.sendPasswordResetEmail(email).then(function() {
  // Email sent.
  alert("Password reset email sent");
}).catch(function(error) {
  // An error happened.
});
});


});

function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {

                  var filename = Date.now()+input.files[0].name;
                  var storageRef = firebase.storage().ref('/profilePics/'+filename);
                  var uploadTask = storageRef.put(input.files[0]);



                  uploadTask.on('state_changed', function(snapshot){
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

                  }, function(error) {
                    // Handle unsuccessful uploads
                  }, function() {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                      firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                      console.log('File available at', downloadURL);

                      var root = firebase.database().ref();
                      var uid = user.uid;
                      var data = {
                        profilePic: downloadURL
                      }

                      var userRoot = root.child("Users");
                      var basicRoot = userRoot.child("basics");
                    //  userRoot.child(uid).set(data);
                      basicRoot.child(uid).update(data);
                    }
                  });
                    });
                  });
                    $('#dp')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
}

function feed(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {

                  var filename = Date.now()+input.files[0].name;
                  var storageRef = firebase.storage().ref('/posts/'+filename);
                  var uploadTask = storageRef.put(input.files[0]);



                  uploadTask.on('state_changed', function(snapshot){
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

                  }, function(error) {
                    // Handle unsuccessful uploads
                  }, function() {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...


                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                      firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                      console.log('File available at', downloadURL);

                      var root = firebase.database().ref();
                      var uid = user.uid;
                      var data = {
                        postPic: downloadURL
                      }

                      var userRoot = root.child("Users");
                      var postsRoot = userRoot.child("posts");
                      var uidRoot = postsRoot.child(uid);
                    //  userRoot.child(uid).set(data);
                      uidRoot.child(uid+Date.now()).update(data);

                      //get reward points
                      var basicRoot = userRoot.child("basics").child(uid);
                      var points = 1;
                      basicRoot.on('value', snap =>{
                        var userDataJSON = snap.val();
                        if(userDataJSON.rewardP != null)
                        {
                          points = userDataJSON.rewardP + 1;
                        }
                        else {
                          points = 1;
                        }
                      });
                      var data2 = {
                        rewardP: points
                      }
                      basicRoot.update(data2);
                      location.reload();
                    }
                  });
                    });
                  });

                };
                reader.readAsDataURL(input.files[0]);


            }
}

function logout()
{
  firebase.auth().signOut().then(function() {
  location.href = "login.html";
}, function(error) {
  // An error happened.
});
}

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
        var points = 0;
        basicRoot.on('value', snap =>{
          var userDataJSON = snap.val();
          if(userDataJSON.rewardP != null)
          {
            points = userDataJSON.rewardP;
          }
        });
        if(points<=40)
        {
           $('#medalImg').attr('src','../assets/img/bronze-medal.png');
           $('#rewardsH').text("YOU GOT BRONZE MEDAL");
        }
        if(points>40 && points<=200)
        {
          $('#medalImg').attr('src','../assets/img/silver-medal.png');
          $('#rewardsH').text("YOU GOT SILVER MEDAL");
        }
        if(points>200)
        {
          $('#medalImg').attr('src','../assets/img/gold-medal.png');
          $('#rewardsH').text("YOU GOT GOLD MEDAL");
        }



      }
    } else {
      // No user is signed in.
    }
  });

});

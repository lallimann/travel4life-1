<?php include "../includes/header.html";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';?>

<div class="navbar-fixed">
  <nav class='col s12 waves-effect indigo'>
    <div class="nav-wrapper">

      <img id="logo" class="logo-size" src="../assets/img/logo.png" />
      <a href="#!" class="brand-logo">Travel4Life</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons" >menu</i></a>

      <ul class="right hide-on-med-and-down">
        <li class=""><a href="profile.html">Feeds</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="flight.html"><i class="material-icons">flight_takeoff</i></a></li>
        <li><a href="rewards.html"><i class="material-icons">stars</i></a></li>
        <li><a href="me.html"><i class="material-icons">account_circle</i></a></li>
      </ul>

      <ul class="side-nav" id="mobile-demo">
        <li class=""><a href="profile.html">Feeds</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="flight.html"><i class="material-icons">flight_takeoff</i></a></li>
        <li><a href="rewards.html"><i class="material-icons">stars</i></a></li>
        <li><a href="me.html"><i class="material-icons">account_circle</i></a></li>
      </ul>

    </div>
  </nav>
</div>
<center>

<?php

$ttl = 0;

if(!empty($_GET['check_list'])){
  ?>
  <h3>Your Cart</h3>
  <?php
  foreach($_GET['check_list'] as $selected){

    if($selected == "test")
    {
      $ttl = $ttl + (1)*$_GET['testQ'];
      ?>

      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/retroT.jpg">
            </div>
            <span class="card-title">Phoenix Arizona Travel T-Shirt</span>
            <div class="card-content">
              <p>Premium shirt is printed with pride in the USA.
                Semi-fitted cut for a modern fit.
                Printed with lightweight, fade resistant inks.
                Super-soft, ring-spun cotton looks and feels great</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test2")
    {
      $ttl = $ttl + (1)*$_GET['testQ2'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/adapter.jpg">
            </div>
            <span class="card-title">LEMEGO Travel Adapter</span>
            <div class="card-content">
              <p>Travel adapter + Dual USB ports,it covers more than 150 countries in US/EU/UK/AU plugs.
                Our world adapter plug allows SIMULTANEOUS use of the AC power socket and dual USB Ports.</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test3")
    {
      $ttl = $ttl + (1)*$_GET['testQ3'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/joggerMen.jpg">
            </div>
            <span class="card-title">Sheng Xi Men's Shorts</span>
            <div class="card-content">
              <p>Cotton blend.<br>Sheng Xi Men's Shorts Men's Slant Pocket Cotton Elastic Drawstring Stretch Shorts.<br>
                Please read the <br>description carefully first.</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test4")
    {
      $ttl = $ttl + (1)*$_GET['testQ4'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/joggerWomen.jpg">
            </div>
            <span class="card-title">Women Jogger</span>
            <div class="card-content">
              <p>BSTBUWIN <br>Women Jogger <br>Baggy Simple Summer Linen <br>Cotton Casual Board Shorts
                <br>50% Polyester<br>50% Cotton</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test5")
    {
      $ttl = $ttl + (1)*$_GET['testQ5'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/hanger.jpg">
            </div>
            <span class="card-title">Hanger</span>
            <div class="card-content">
              <p>Package included:1Pc Folding Cloth Hanger
                Material: Plastic
                Folding size: 16*5.4*1.5cm ; Expanded Size:31*11*1.5cm
                Portable Foldable Type Light and Easy Take Along for Travel or Business Travel </p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test6")
    {
      $ttl = $ttl + (1)*$_GET['testQ6'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/fan.jpg">
            </div>
            <span class="card-title">Mini Fan Cell Phone Fan</span>
            <div class="card-content">
              <p>Low power consumption, bring comfy breeze, but not much noisy sound, just like breeze.
Only 15g light weight and cute size, you can take this small electronic fan everywhere in summer, hiking, running, playing on the beach.</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test7")
    {
      $ttl = $ttl + (1)*$_GET['testQ7'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/travelBag.jpg">
            </div>
            <span class="card-title">Travel Bag</span>
            <div class="card-content">
              <p>Teresamoon<br> Travel <br>Portable Wash <br>Cosmetic Bag<br> (Black).</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test8")
    {
      $ttl = $ttl + (1)*$_GET['testQ8'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/watch.jpg">
            </div>
            <span class="card-title">Watch</span>
            <div class="card-content">
              <p>Gender: Women's/Men's Display: Analog Style: Casual
                Easy To Read Case Material: Metal Case Diameter:3.8cm/1.6''
                PU Leather Band Length: 23cm/9.08''
                2cm/0.79''
                Package Content: 1X Watch</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test9")
    {
      $ttl = $ttl + (1)*$_GET['testQ9'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/cond.jpg">
            </div>
            <span class="card-title">Conditioner</span>
            <div class="card-content">
              <p>Replenishing Conditioner is formulated to work with the Simply Smooth Brazilian Keratin Treatment. Directions: Apply a small amount to thoroughly wet hair. Massage gently into hair and scalp. Rinse well with warm water.</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test10")
    {
      $ttl = $ttl + (1)*$_GET['testQ10'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/brac.jpg">
            </div>
            <span class="card-title">Bracelet</span>
            <div class="card-content">
              <p>Quartz ☆ Display: Analog Life Waterproof
                Watch Case Material: Alloy Watch Belt Material: PU Leather
                Watch Diameter: 25 mm Width Of Watch Belt: 17mm Thickness: 6 mm Length Of Watch: 200 mm</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test11")
    {
      $ttl = $ttl + (1)*$_GET['testQ11'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/pillow.jpg">
            </div>
            <span class="card-title">Pillow</span>
            <div class="card-content">
              <p>☆ These Beautiful Pillows are sold without the filler.
☆ Great as mediation pillow, kids play room, or as an accent pillow on your bed.
☆ Bring color into your home for All seasons with this super groovy round shape floor pillow poufs with happy pompom borders.</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
    if($selected == "test12")
    {
      $ttl = $ttl + (1)*$_GET['test12'];
      ?>
      <div class="row  services-div">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/tpillow.jpg">
            </div>
            <span class="card-title">Travel Pillow</span>
            <div class="card-content">
              <p>Imagine a stress-free travel experience instantly with this NEW travel neck pillow...
SOFT & COMFY - This LITE version U shaped travel pillow is slightly smaller than our highly-popular luxury travel pillow and is made out of the same premium velour fabric for the softest touch imaginable.</p>
            </div>
          </div>
        </div>
      </div>
      <?php
    }
  }

}


else{
echo "<b>Please Select Atleast One Option.</b>";
}



?>

<!-- <form action="billing.php">
  <br>
  <button <?php if(empty($_GET['check_list'])) {?> disabled="disabled" <?php } ?> class="btn btn-primary" type="submit">Checkout</button>
</form> -->
</center>

<center>
  <?php
    echo "Your total is ".$ttl." points";
  ?>
  <br>
<a class="modal-trigger" href="#modal1"><button class="btn btn-primary indigo" <?php if($ttl<= 0) { echo "disabled='true'"; } ?>>Checkout</button></a>
</center>

  <div id="modal1" class="modal">
   <div class="modal-content">

     <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text">
          <label for="icon_prefix">First Name</label>
        </div>
      </div>
        <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">my_location</i>
          <input id="icon_my_location" type="text">
          <label for="icon_my_location">Address</label>
        </div>
      </div>
      <div class="row">
      <div class="input-field col s6">
        <i class="material-icons prefix">email</i>
        <input id="icon_email" type="email" class="validate">
        <label for="icon_email">Email</label>
      </div>
    </div>

  </div>


   </div>
   <div class="modal-footer">
     <button id="chkout" href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Order</button>
   </div>
   </form>
 </div>


<?php include "../includes/footer.html"

?>
<script type='text/javascript'>
$(document).ready(function(){
$('.modal').modal();


  $("#chkout").click(function(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var root = firebase.database().ref();
        var uid = user.uid;
        var userRoot = root.child("Users");
        var postsRoot = userRoot.child("posts");
        var uidRoot = postsRoot.child(uid);
        var basicRoot = userRoot.child("basics").child(uid);
        var points = 0;
        var rewards = 0;
        var p = 0;
        basicRoot.on('value', snap =>{
          var userDataJSON = snap.val();
          if(userDataJSON.rewardP != null)
          {
            rewards = userDataJSON.rewardP;
            p = "<?php echo $ttl; ?>";
          }
          else {
            points = 1;
          }

        });
      }
      if(p>rewards)
      {
        alert("You don't have enough points")
      }
      else {
        {
          points = rewards - p;

          alert("Order placed successfully");


        }
      }
      var data2 = {
        rewardP: points
      }
      basicRoot.update(data2)

    });
    ;
  });

});

</script>

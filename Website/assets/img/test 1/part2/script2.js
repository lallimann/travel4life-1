var sav = 500.0;
var check = 500.0;
var creditTotal  = 1000.0;
var creditAvail = 1000.0;
var selectedFrom = "null";
var selectedTo = "null";

document.getElementById("othersU").style.display = "none";

document.getElementById("currentB").innerHTML = "saving = " + sav + "$ checking =" + check + "$"

document.getElementById('dName').innerHTML = "WELCOME: " + sessionStorage.getItem('userDisp');

document.getElementById("credit").innerHTML = "Total = " + creditTotal + "$ Available =" + creditAvail + "$"

function savingF()
{
  var checkBox = document.getElementById("savingF");
  var checkBoxC = document.getElementById("checkingF");
    if (checkBox.checked == true){
      checkBoxC.checked = false;
        selectedFrom = "saving"
    }
}

function checkingF()
{
  var checkBoxS = document.getElementById("savingF");
  var checkBox = document.getElementById("checkingF");
    if (checkBox.checked == true){
      checkBoxS.checked = false;
        selectedFrom = "checking"
    }
}

function savingT()
{
  var checkBoxC = document.getElementById("checkingT");
  var checkBoxO = document.getElementById("othersT");
  var checkBox = document.getElementById("savingT");
    if (checkBox.checked == true){
        selectedTo = "saving"
        checkBoxO.checked = false;
        checkBoxC.checked = false;
    }
}

function checkingT()
{
  var checkBoxO = document.getElementById("othersT");
  var checkBoxS = document.getElementById("savingT");
  var checkBox = document.getElementById("checkingT");
    if (checkBox.checked == true){
        selectedTo = "checking"
        checkBoxO.checked = false;
        checkBoxS.checked = false;
    }
}

function othersT()
{
  var checkBoxC = document.getElementById("checkingT");
  var checkBoxS = document.getElementById("savingT");
  var checkBox = document.getElementById("othersT");
    var text = document.getElementById("othersU");
    if (checkBox.checked == true){
      checkBoxC.checked = false;
      checkBoxS.checked = false;
        text.style.display = "block";
        selectedTo = "others"
    } else {
       text.style.display = "none";
    }
}

function trans()
{
  var amount = document.getElementById("amount").value;

if(isNaN(amount))
{
  alert("enter numeric amount");
}
else {

  if(selectedFrom == "saving")
  {
    if(selectedTo == "checking")
    {
      if(amount<=sav)
      {
        check = parseFloat(check) + parseFloat(amount);
        sav = parseFloat(sav) - parseFloat(amount);
      }
      else {
        var total = parseFloat(sav) + parseFloat(creditAvail);
        if(total>=amount)
        {
          var add = parseFloat(sav) - parseFloat(amount);
          sav = parseFloat(0);
          creditAvail = parseFloat(creditAvail) + parseFloat(add);
            check = parseFloat(check) + parseFloat(amount);
        }
        else {
          alert("invalid amount");
        }
      }
    }
    if(selectedTo == "others")
    {
      if(amount<=sav)
      {
        sav = parseFloat(sav) - parseFloat(amount);
      }
      else {
        var total = parseFloat(sav) + parseFloat(creditAvail);
        if(total>=amount)
        {
          var add = parseFloat(sav) - parseFloat(amount);
          sav = parseFloat(0);
          creditAvail = parseFloat(creditAvail) + parseFloat(add);
        }
        else {
          alert("invalid amount");
        }
      }
    }
  }
  if(selectedFrom == "checking")
  {
    if(selectedTo == "saving")
    {
      if(amount<=check)
      {
        sav = parseFloat(sav) + parseFloat(amount);
        check = parseFloat(check) - parseFloat(amount);

      }
      else {
        var total = parseFloat(check) + parseFloat(creditAvail);
        if(total>=amount)
        {
          var add = parseFloat(check) - parseFloat(amount);
          check = parseFloat(0);
          creditAvail = parseFloat(creditAvail) + parseFloat(add);
            sav = parseFloat(sav) + parseFloat(amount);
        }
        else {
          alert("invalid amount");
        }

      }
    }
    if(selectedTo == "others")
    {
      if(amount<=check)
      {
        check = parseFloat(check) - parseFloat(amount);
      }
        else {
          var total = parseFloat(check) + parseFloat(creditAvail);
          if(total>=amount)
          {
            var add = parseFloat(check) - parseFloat(amount);
            check = parseFloat(0);
            creditAvail = parseFloat(creditAvail) + parseFloat(add);
          }
          else {
            alert("invalid amount");
          }

        }
      }
    }
  }
  document.getElementById("credit").innerHTML = "Total = " + creditTotal + "$ Available =" + creditAvail + "$"
  document.getElementById("finalB").innerHTML = "Final Balanace->" + " saving = " + sav + "$ checking =" + check + "$";
}

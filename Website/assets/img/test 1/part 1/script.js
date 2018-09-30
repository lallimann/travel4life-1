function login()
{
  if(document.getElementById('user').value == "user1" && document.getElementById('pass').value == "password")
  {
    sessionStorage.setItem('userDisp', document.getElementById('user').value);
    window.open("index2.html");
  }
  else {
    alert("Wrong username or password");
  }
}

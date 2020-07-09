function checkCookie() {
  if (document.cookie != "") {
    document.getElementById("preloader").style.display = "none";
  } else {
    var date = new Date();
    date.setTime(date.getTime() + 60*60*1000);
    document.cookie = "expires=" + date.toGMTString();
  }
}
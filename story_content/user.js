function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y6LkV4vO9F":
        Script1();
        break;
      case "6mguwGj4l6L":
        Script2();
        break;
      case "5dofJcdYd5O":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var query = window.location.search.substring(7);
player.SetVar("JumpToSlide",query);
}

function Script2()
{
  var player = GetPlayer (); 
var urlID = player.GetVar("JumpToSlide");
var urlOffice = player.GetVar("endcourse");
var urlScore = player.GetVar("score");

var passURL = "https://bluesite.thuoper.com/course_response?userid="+urlID+"&office="+urlOffice+"&score="+urlScore;

window.open(passURL,"_top");
}

function Script3()
{
  var player = GetPlayer (); 
var urlID = player.GetVar("JumpToSlide");
var urlOffice = player.GetVar("endcourse");
var urlScore = player.GetVar("score");

var passURL = "https://bluesite.thuoper.com/course_response?userid="+urlID+"&office="+urlOffice+"&score="+urlScore;

window.open(passURL,"_top");
}


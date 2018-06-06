var Player_Score = 0;
var Computer_Score = 0;
function ImageClick(ImgSelected, choice)
{

  toDisplay(choice, ImgSelected);
  ComputerChoice();

}

function ComputerChoice()
{
  var choice = Math.floor(Math.random()*(3-0))+0;

  toDisplay("Computer-choice", choice);
  ScoreCal();

}
function toDisplay(spanID,ImgSelected)
{
  if(ImgSelected == 0)
  {
    document.getElementById(spanID).innerHTML = "Rock";
  }
  else if(ImgSelected == 1)
  {
    document.getElementById(spanID).innerHTML = "Paper";
  }
  else {
    document.getElementById(spanID).innerHTML = "Scissor";
  }
}

function ScoreCal()
{
  var Player_Choice;
  var Comp_Choice;
  Player_Choice = document.getElementById("ur-choice").innerHTML;
  Comp_Choice = document.getElementById("Computer-choice").innerHTML;
  if(Player_Choice === Comp_Choice)
  {
    MyAlert("Its a tie", 1);
  }
  else if(Player_Choice == "Rock"){
    if(Comp_Choice == "Paper")
    {
      MyAlert("Computer Won!", 1);
      displayScore("Computer");
    }
    else{
      MyAlert("You Won !", 1);
      displayScore("Player");
    }
  }
  else if(Comp_Choice == "Rock")
  {
    if(Player_Choice == "Paper")
    {
      MyAlert("You Won !", 1);
      displayScore("Player");
    }
    else {
      MyAlert("Computer Won!", 1);
      displayScore("Computer");
          }

  }
  else if(Player_Choice =="Scissor")
  {
    MyAlert("You Won!", 1);
    displayScore("Player");
  }
  else {

    MyAlert("Computer Won!", 1);
    displayScore("Computer");
  }



}
function displayScore(whoWon)
{
  if(whoWon === "Computer")
  {
    if(Computer_Score < 5)
    {
      Computer_Score++;
      document.getElementById("Com-score").innerHTML = Computer_Score;
    }

  }
  else
  {
    if(Player_Score < 5)
    Player_Score++;
    document.getElementById("ur-score").innerHTML = Player_Score;
  }

  if(Player_Score == 5)
  {
  alert("You won the Game :)");
  ResetValues();
}
  else if(Computer_Score ==5)
  {
  alert("Computer won the Game :)");
  ResetValues();
}
}
function ResetValues()
{
  Player_Score =0;
  Computer_Score = 0
  document.getElementById("Com-score").innerHTML = 0;
  document.getElementById("ur-score").innerHTML = 0;
  document.getElementById("ur-choice").innerHTML = "......";
  document.getElementById("Computer-choice").innerHTML = "......";
}
function MyAlert(Message,Btn1, Btn2)
{
  var MsgBox = document.createElement("div");
  MsgBox.setAttribute("id", "MsgDiv");
  var Txt = document.createTextNode(Message);
  MsgBox.appendChild(Txt);
  document.body.appendChild(MsgBox);
  var body = document.getElementsByTagName("body");
  body[0].style.opacity = "0.5";
  MsgBox.style.opacity = "1";

  if(Btn1)
  {
    var Btn1 = document.createElement("button");
    Btn1.setAttribute("id", "MsgDivBtn1");
     Txt = document.createTextNode("Ok");
    Btn1.appendChild(Txt);
    document.getElementById("MsgDiv").appendChild(Btn1);
    Btn1.onclick = function()
    {
      body[0].style.opacity = "1";
      MsgBox.style.display = "none";
    }
  }

}

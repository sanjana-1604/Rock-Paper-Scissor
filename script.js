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
  var body = document.getElementById("myBody");
  body.style.opacity = "0.5";
  MsgBox.style.opacity = "1";
  if(Btn2)
  {
    var BtnNewGame = document.createElement("button");
    BtnNewGame.setAttribute("id", "MsgDivBtnNewGame");
     Txt = document.createTextNode("Ok");
    BtnNewGame.appendChild(Txt);
    document.getElementById("MsgDiv").appendChild(BtnNewGame);
    BtnNewGame.onclick = function()
    {
      body.style.opacity = "1";
      MsgBox.parentNode.removeChild(MsgBox);
    }
    var BtnExit = document.createElement("button");
    BtnExit.setAttribute("id", "MsgDivBtnExit");
     Txt = document.createTextNode("Exit");
    BtnExit.appendChild(Txt);
    document.getElementById("MsgDiv").appendChild(BtnExit);
    BtnExit.onclick = function()
    {
      /*window.open('https://sanjana-1604.github.io/Rock-Paper-Scissor', '_self', '');
      window.close();*/
      open(location, '_self').close();
    }

  }
  else
  {
    var BtnOk = document.createElement("button");
    BtnOk.setAttribute("id", "MsgDivBtn1");
     Txt = document.createTextNode("Ok");
    BtnOk.appendChild(Txt);
    document.getElementById("MsgDiv").appendChild(BtnOk);
    BtnOk.onclick = function()
    {
      body.style.opacity = "1";
      MsgBox.parentNode.removeChild(MsgBox);
      var msgtxt;
      if(Player_Score == 5)
      {
        msgtxt = "You won the Game. Press OK to continue";
      MyAlert(msgtxt, 1, 2);
      ResetValues();
    }
      else if(Computer_Score ==5)
      {
        msgtxt = "Computer won the Game. Press OK to continue"
      MyAlert(msgtxt, 1, 2);
      ResetValues();
    }
    }
  }


}

function pickGame() {
    let gamesList = [];
    gamesList = document.getElementById("gameinput").value;
    gamesList = gamesList.split(/\r?\n/);
    let gameSelected =
      gamesList[Math.floor(Math.random() * gamesList.length)];
    document.getElementById("gameDisplayText").innerHTML =
      "Play: " + gameSelected;
  }
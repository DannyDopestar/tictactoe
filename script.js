// who goes first
let targetPlayer;
const poss = ["X", "O"];
const rand = Math.floor(Math.random() * 2);
let didwin = false;
targetPlayer = poss[rand];

document.querySelector(".game").addEventListener("click", function (e) {
  if (e.target.classList.contains("box")) {
    // stuff here
    if (didwin) {
      return;
    }
    if (e.target.textContent !== "") {
      return;
    }
    e.target.textContent = targetPlayer;

    if (targetPlayer === "X") {
      targetPlayer = "O";
    } else {
      targetPlayer = "X";
    }

    const box1 = document.querySelector("#box1").textContent;
    const box2 = document.querySelector("#box2").textContent;
    const box3 = document.querySelector("#box3").textContent;
    const box4 = document.querySelector("#box4").textContent;
    const box5 = document.querySelector("#box5").textContent;
    const box6 = document.querySelector("#box6").textContent;
    const box7 = document.querySelector("#box7").textContent;
    const box8 = document.querySelector("#box8").textContent;
    const box9 = document.querySelector("#box9").textContent;

    if (box1 === box2 && box1 === box3 && box1) {
      console.log("You win!");
      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }
    if (box4 === box5 && box4 === box6 && box4) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }

    if (box7 === box8 && box7 === box9 && box7) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }

    if (box1 === box4 && box1 === box7 && box1) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }

    if (box2 === box5 && box2 === box8 && box2) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }

    if (box3 === box6 && box3 === box9 && box3) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }

    if (box1 === box5 && box1 === box9 && box1) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      didwin = "true";
      document.querySelector("#message").textContent = targetPlayer + " win";
    }

    if (box3 === box5 && box1 === box7 && box1) {
      console.log("You win!");

      if (targetPlayer === "X") {
        targetPlayer = "O";
      } else {
        targetPlayer = "X";
      }
      document.querySelector("#message").textContent = targetPlayer + " win";
    }
  }
});

document.querySelector("#reset").addEventListener("click", function (e) {
  console.log("run this function");
  if (didwin) {
    document.querySelector("#box1").textContent = "";
    document.querySelector("#box2").textContent = "";
    document.querySelector("#box3").textContent = "";
    document.querySelector("#box4").textContent = "";
    document.querySelector("#box5").textContent = "";
    document.querySelector("#box6").textContent = "";
    document.querySelector("#box7").textContent = "";
    document.querySelector("#box8").textContent = "";
    document.querySelector("#box9").textContent = "";
  }
});

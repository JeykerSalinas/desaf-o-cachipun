// const myChances = Number(prompt("Cuántas veces vamos a jugar?"))
const myChances = 3;
const plays = ["piedra", "papel", "tijera"];
const pc = () => plays[Math.floor(Math.random() * 3)];
let myCountdown = 0
let pcCountdown = 0

for (let i = myChances; i > 0; i--) {
let myPlay = prompt("Piedra, papel o tijera?").toLocaleLowerCase();
let pcPlay = pc()

console.log("Tu jugaste ",myPlay)
  console.log("La pc jugó ", pcPlay)

    if (myPlay === pcPlay) {
        console.log("empate");
      }
    else if (myPlay === "piedra" && pcPlay === "tijera") {
      console.log("Ganaste¡¡");
      myCountdown++
    }
    else if (myPlay === "papel" && pcPlay === "piedra") {
      console.log("Ganaste¡¡");
      myCountdown++
    }
    else if (myPlay === "tijera" && pcPlay === "papel") {
      console.log("Ganaste¡¡");
      myCountdown++
    }
    else if (pcPlay === "piedra" && myPlay === "tijera") {
      console.log("Perdiste¡¡");
      pcCountdown++
    }
    else if (pcPlay === "papel" && myPlay === "piedra") {
      console.log("Perdiste¡¡");
      pcCountdown++
    }
    else if (pcPlay === "tijera" && myPlay === "papel") {
      console.log("Perdiste¡¡");
      myCountdown++
    } 
}

if(myCountdown>pcCountdown){ console.log(`Resultado: ${myCountdown} - ${pcCountdown}. Felicidades, ganaste el partido`)}
else if(myCountdown<pcCountdown){ console.log(`Resultado: ${myCountdown} - ${pcCountdown}. Perdiste, lo siento`)}
else if(myCountdown=pcCountdown){ console.log(`Resultado: ${myCountdown} - ${pcCountdown}. Empate`)}
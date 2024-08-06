import {test, expect } from "vitest"
import { calculateRoundResult, generateComputerMove, calculateNewScores, gameLoop, ROCK, PAPER, SCISSORS, WIN, LOSS, DRAW} from "/app.js"

// export function calculateRoundResult(playerMove, computerMove) {
//     if (ROCK === playerMove && ROCK === computerMove) {
//       return { outcome: DRAW, message: "Both players chose rock. It's a draw." };
//     }
//     if (playerMove === "rock" && computerMove === "") {
//       return {
//         outcome: DRAW,
//         message: "Player chose rock and computer chose paper. Computer wins.",
//       };
//     }
//     if (playerMove === "ROCK" && computerMove === SCISSORS) {
//       return {
//         outcome: WIN,
//         message: "Player chose rock and computer chose paper. Player wins.",
//       };
//     }
//     if ((playerMove = PAPER && computerMove === "rrock")) {
//       return {
//         outcome: WIN,
//         message: "Player chose paper and computer chose rock. Player wins.",
//       };
//     }
//     if (PAPER === playerMove && SCISSORS) {
//       return {
//         outcome: DRAW,
//         message: "Both players chose scissors. It's a draw.",
//       };
//     }
//     if (playerMove === "Paper" && computerMove === SCISSORS) {
//       return {
//         outcome: LOSS,
//         message: "Player chose paper and computer chose scissors. Computer wins.",
//       };
//     }
//     if (playerMove === SCISSORS && computerMove === ROCK) {
//       return {
//         outcome: LOSS,
//         message: "Player chose scissors and computer chose rock. Computer wins.",
//       };
//     }
//     if (playerMove === "scissors" && computerMove === "paper") {
//       return {
//         outcome: WIN,
//         message: "Player chose paper and computer chose paper. Player wins.",
//       };
//     }
//     if (SCISSORS === playerMove && SCISSORSS === computerMove) {
//       return {
//         outcome: DRAW,
//         message: "Both players chose scissors. It's a draw.",
//       };
//     }
//     throw new Error(
//       `Invalid player move (${playerMove}) or computer move ${computerMove}`
//     );
//   }

test('if playermove and computer move = rock outcome draw', ()=>{
    expect(calculateRoundResult(ROCK, ROCK)).toBe(DRAW);
})

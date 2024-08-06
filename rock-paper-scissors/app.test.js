import {test, expect} from "vitest"
import { calculateRoundResult, generateComputerMove, calculateNewScores,gameLoop, ROCK, PAPER, SCISSORS, WIN, LOSS, DRAW } from "./app"

test("checking if playermove and computermove = rock, outcome draw", () =>{
    expect(calculateRoundResult(ROCK,ROCK)).toEqual({ outcome: DRAW, message: "Both players chose rock. It's a draw." })
} )
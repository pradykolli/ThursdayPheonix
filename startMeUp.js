const readLine = require("readLine-sync")

let name = readLine.question("Who are you? ")
let height = readLine.questionInt("How tall are you? ")

if(height > 7){
    console.log("Please consider trying out for the basketball team")
}else{
    console.log("Please consider trying out for the Rugby team")
}
const inquirer = require("inquirer");

const fs = require("fs");

const {Triangle, Square, Circle} = require("./lib/shapes");

function writeToFile(fileName, answers){

    let svgString = "";

    svgString = 
    `<svg version="1.1" width="300" height="200">`;


    svgString += "<g>"

    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Triangle"){
        shapeChoice = new Triangle();
        svgString += `<polygon points="150,18,244,56,182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    
    svgString += "</g>";

    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err)=> {
        err ? console.log(err) : console.log("Generated logo.svg");
    });

}

function promtUser () {
    inquirer
    .prompt ([
        {
            type:"input",
            message: "Type three characters for logo display",
            name: "text",
        },
        {
            type:"list",
            message:"Select logo shape",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
        },
        {
            type:"input",
            message: "Logo Color",
            name:"shapeBackgroundColor",
        },
    ])
    .then ((answers)=>{

        if (answers.text.length > 3){
            console.log("Do not enter more than 3 characters");
            promtUser();
        } else {
            writeToFile("logo.svg", answers);
        }
    });
}

promtUser();
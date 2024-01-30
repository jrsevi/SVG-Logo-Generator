const { Circle, Square, Triangle } = require('./library/shapes.js');

const fs = require('fs');

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type:"list",
        name:"shape",
        message: "Please select a shape",
        choices: ["Circle", "Square", "Triangle"] 
    },
    {
        type:"input",
        name:"color",
        message: "Please enter a color"
    },
    {
        type: 'input',
        name: 'text',
        validate: function (value) {
            if (value.length === 3) {
                return true;
            }
            return 'Please enter 3 characters';
        },
        message: 'Please enter 3 characters'
    }
]).then(function (answers) {
    let shape;
    let text = answers.text;
    let color = answers.color;
    if (color === "") color = "black";
    switch (answers.shape) {
        case "Circle":
            shape = new Circle(answers.color);
            break;
        case "Square":
            shape = new Square(answers.color);
            break;
        case "Triangle":
            shape = new Triangle(answers.color);
            break;
    }
    fs.writeFile("logos/" + answers.shape + ".svg", renderSvg(shape, text), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File Saved Sucessfully!");
        }
        });
    });

    function renderSvg(shape, text) {
        return `<svg width="100" height="100">
        ${shape.render()}
        <text x="50%" y="50%" text-anchor="middle" font-size="2em" alignment-baseline="middle" fill="white">${text}</text>
        </svg>`;
    }
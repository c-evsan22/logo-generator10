const {Triangle, Square, Circle} = require("./shapes");

describe ("Triangle Test",()=>{
    test("test for a triangle with a red background",()=>{
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<polygon points="250,60 100,400 400,400" fill="red" />'
        );
    });
});

describe("Square test",()=>{
    test("test Square for purple background",()=>{
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="purple" />'
        );
    });
});


describe("Circle test",()=>{
    test("test Circle with a blue background",()=>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="blue" />'
        );
    });
});
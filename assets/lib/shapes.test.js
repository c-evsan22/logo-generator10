const {Triangle, Square, Circle} = require("./shapes");

describe ("Triangle Test",()=>{
    test("test for a triangle with a blue background",()=>{
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});

describe

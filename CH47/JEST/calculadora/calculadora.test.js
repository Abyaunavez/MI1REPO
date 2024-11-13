const { describe } = require('yargs');
const calculate = require('./cal');
const { beforeEach } = require('jest-circus');

describe("operation = suma", ()=>{
let numer1, numer2, resultElement;
beforeEach(()=>{
    //simular el DOM
    document.body.innetHTML = `<input id="number1" value="2"/>
    <input id="numer2" value ="2"/>
    <div id= "result"></div>`;
    
    number1 document.getElementById("number1").value;
    number2 document.getElementById("number").value;
    resultElement = document.getElementById("result");
})


test("operation = suma & values 2,2 & expected 4 ", ()=>{
    calculate("add");
    expect(resultElement.innerText).toBe("result")
})
})
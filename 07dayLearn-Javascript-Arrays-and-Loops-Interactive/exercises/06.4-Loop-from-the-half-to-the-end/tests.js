const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function as many times as half of the amount of items in the array', function () {
    const app = require('./app.js');
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    expect(console.log.mock.calls.length).toBe(variable.length/2);
});

it('Print in the console as you loop the array', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('mySampleArray');
    expect(_buffer).toMatch(variable.filter((n,i) => i > (variable.length / 2)).map(n => n+"\n").join(""));
});
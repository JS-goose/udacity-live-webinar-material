'use strict'
function Obj() {
    this.ham = 'yes',
    this.bacon = 'yes',
    this.legs = '4',
    this.makeNoise = function() {
        this.bacon = 'please'
        console.log('oink!');
    };

}
const testObj = new Obj();

function pigNoise() {
    this.b = 'foo';
}
pigNoise.bind(this)();


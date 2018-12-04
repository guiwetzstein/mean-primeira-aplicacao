console.log(global === this);
console.log(module === this);
console.log(module.exports === this);
console.log(this); // inicialmente objeto vazio!!

this.digaOi = function () {
    console.log('Oi!!!');
};
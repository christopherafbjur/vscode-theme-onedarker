function oneDarkerTheme({clr, contrast}){
  const color = prepareContrast(clr);
  const contrastified = [];

  for (var i = 0; i < contrast.length; i++){
    contrastified.push(addContrast(color));
  }

  return {
    darker: contrastified
  }
}
oneDarkerTheme('dark', 'darker');


const json = {
	"str": "top",
	"num": 1337,
	"bool": true,
}

const colors = {aaa: {bbb: {ccc: 'ccc'}}}
const theme = {
  name: "Theme",
  type: "darker",
  colors: {
    "testa": colors.aaa.bbb.ccc,
    "testb": colors.aaa.bbb
  }
}

const s = {
  methodName: function (attribute) {

  },
  key: 'value'
}

ClassName.prototype.methodName = function () {

};

do {

} while (true);

condition ? true : false


if (true) {

}


if (true) {

} else if(false) {

} else {

}


let test = null;

if(test && test == 0 || test === 'test'){
  return true;
}


function(){
  for (var i = 0; i < array.length; i++) {
    array[i];
  };
}


for (var variable in object) {
	if (object.hasOwnProperty(variable)) {

	}
}


for (variable of iterable) {

}


function functionName() {

}


function () {

}


() => {

}


function* functionName() {

}


function* () {

}

getElementsByClassName('className')

(function() {
	'use strict';
}());

console.log();
console.dir();
console.warn();
console.error();



console.log(require('test').inspect( { depth: null }));

/^[a-z0-9_-]{3,16}$/

new Promise(function(resolve, reject) {

});



setInterval(function () {

}, 10);



setTimeout(function () {

}, 10);



switch (expression) {
	case expression:

		break;
	default:

}

const test;

if(test == 2){

}else if(true === false){

}else if ('str' === typeof 'string'){

}else if(1 === 2){

}else{

}

try {

} catch (e) {

} finally {

}



while (true) {

}


//Comment

/**
 * Block Comment
 */




const module = require('module');



class ClassName {
	constructor(asd) {

	}
}



exports.functionName = function () {

};



module.exports = name;



return ;


const arr = [1, 2, 3];
const obj = {taco: 1, talo: 'haj', teno: true}
const ladi = `${obj.taco} sheep jumpin down the lane.`;
const testa = [...arr];
const testo = {...obj};
const {taco, talo} = obj;
const [mop, dop] = arr;

export default {
	title: 'taco'
}

import Tamo from 'ladiko';
Tamo.cata;

export default {
  title: "String",
  fieldsets: [
    {
      title: "String",
      options: { collapsible: true, num: 100 }
    }
  ],
  fields: [
    test.Test,
    ...Testing,
  ]
};

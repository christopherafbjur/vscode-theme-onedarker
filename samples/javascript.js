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

var talo;
let tabi;
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

var talo;
let tabi;
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
test.say();



console.log(require('test').inspect( { depth: null }));

/^[a-z0-9_-](testing){3,16}$/

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



const nocando = true;
const module = require('module');



class ClassName {
	constructor(asd) {

  }
  
  myTest(){
    //Log
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
    tata,
    ...Testing,
  ]
};


//REACT
import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";

const Input = ({ placeholder }) => {
  const [value, onChangeText] = React.useState(placeholder);

  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      {user && selectedConversation && (
        <MessagesInput
          newConversationCreated={this.newConversationCreated}
          conversation={selectedConversation}
          currentUser={user}
          test="str"
          test2={100}
        />
      )}
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 1 }
  },
  icon: {
    height: 50,
    backgroundColor: "#FFD540"
  },
  input: {
    fontSize: 20
  }
});

class Messages extends Component {
getTempConversation = async queryStringParams => {
  const user = getCurrentUser();
  let { to: toUserId } = queryStringParams,
    { data: recipent } = await getUserFromId(toUserId);

  return {
    conversation_id: "provisoric",
    recipent: recipent.name
  };
};
}

Input.defaultProps = {
  placeholder: "Placeholder text"
};

module.exports = {}
export default Input;

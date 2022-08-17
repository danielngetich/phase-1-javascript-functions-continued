function saturdayFun(name="roller-skate"){
    return (`This Saturday, I want to ${name}!`);
}

function mondayWork(note='go to the office'){
    return (`This Monday, I will ${note}.`);
}

// function wrapAdjective(res="You are"){
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     return `${res} ${emphatic} `
// }
// wrapAdjective("%")("a dedicated programmer");

function wrapAdjective(greet="*") {
    return function (name) {
      return `You are ${greet}${name}${greet}!`;
    };
  }
  

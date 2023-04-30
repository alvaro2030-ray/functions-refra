// FUNCTIONS: Basics
// BEFORE YOU START: please read the /exercises-info/e1.md file.
// NAMED FUNCTION SYNTAX: is described in /exercises-info/e4.md file.

/**
 * ====================================================
 * Create a function to work as follows:
  * The function name is 'logMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message in the console.
  * The function does NOT require any arguments.
 * Message to print: 'Hello, World!'
 * logMessage() => 'Hello, World!'
*/

// Your code goes here
function logMessage(){
  console.log('Hello, World');
}
logMessage();

/**
 * =============================================================
 * Create a function that works as follows:
  * The function name is 'logMyMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a specific message in the console.
  * The message is a string value passed as an argument
 * Message example: 'I log my first message!'
 * logMyMessage('My message') => 'My message'
*/

// Your code goes here...
var message ='I log my first message!';
function logMyMessage(myMessage){
console.log(myMessage);
}
logMyMessage(message);


/**
 * ===============================================================
 * Create a  function that works as follows:
  * The function name is 'logMessageWithMyName' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message of 'My name is <name>!'.
  * The name is a string value passed as an argument
 * logMessageWithMyName('Andrew') => 'My name is Andrew!'
*/

// Your code goes here...
var name = 'Andrew';
function logMessageWithMyName(logName){
  console.log('My name is '+logName);
}
logMessageWithMyName(name);


/**
 * ==============================================================
 * Create a function that works as follows:
  * the function name is 'logMyInfo' strictly.
  * The function MUST use NAMED function syntax.
  * The function of logs a message of 'My name is <name>. I am <age> years old!'.
  * The name is a string value passed as an argument.
  * The age is a number value passed as an argument.
 * logMyInfo('Andrew', 18) => 'My name is Andrew. I am 18 years old!'
*/

// Your code goes here...
var nameInfo = 'Andrew';
var ageInfo = '18';
function logMyInfo(name, age){
console.log('My name is '+ name +'. I am '+ age +' years old!');
}
logMyInfo(nameInfo, ageInfo);



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  logMessage: logMessage || undefined,
  logMyMessage: logMyMessage || undefined,
  logMessageWithMyName: logMessageWithMyName || undefined,
  logMyInfo: logMyInfo || undefined
}

export { f };

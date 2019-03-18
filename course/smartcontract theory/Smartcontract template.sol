pragma solidity ^0.4.17;

contract Inbox {
  string public message;

  function Inbox(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }

  function getMessage() public view returns (string) {
    return message;
  }
}




// structure:

// - compiler version

// - contract Inbox = Class + name of the class
// - string public message; = type(always a string) + who has access to the variable + storage variable/instance variable
//   that will remain forever on the blockchain after the deployment (!= local variable only exists inside the contracts. non persistant on the blockchain)

//  - functions: 2 types

// GENREAL STUCTURE = function name(arguments)+ function type, return types
// SECTION 1, SESSION 20 2:38
// function type = public (full acces) private (0 direct access to the function), view (only view, no modification) payable (need payment to be performed)




// Constructor function (def initialize ruby) (called 1 time at an instance creation)
//  1) function SameNameasContract(type variableName) public {
//   actual fonction content
// }

// 2) contract feature function
// function functionName(type variablename)

// public view returns:
// return value NB: only with a view or constant type

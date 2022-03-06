// SPDX-License-Identifier: None

pragma solidity >=0.7.5;

// way to inhert from contract ownable for owner functionality
contract Ownable {
    // mapping(address => uint) public balances;
    // by adding internal to state variable (visibility level), automatically creates a function where only the person declaring function can run this
    address internal owner;

    // modifier of the owner of W3S Token contract
    modifier onlyOwner() {
        require(msg.sender == owner);
        // run the function next
        _;
    }

    // sets the owner as owner of W3S contract (msg.sender)
    constructor() {
        owner = msg.sender;
    }
}

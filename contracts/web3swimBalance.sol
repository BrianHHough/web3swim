// SPDX-License-Identifier: None

pragma solidity >=0.7.5;

import "./web3swimOwnable.sol";

contract Web3SwimBalance is Ownable {
    mapping(address => uint256) balance;

    // define event
    event depositDone(uint256 amount, address indexed depositedTo);

    event balanceTransfered(
        uint256 amount,
        address indexed transferedFrom,
        address transferredTo
    );

    event balanceWithdrawn(address indexed withdrawnFrom);

    // for anyone to deposit W3S Token
    function deposit() public payable returns (uint256) {
        balance[msg.sender] += msg.value; // to internally track who deposited money
        // add event
        emit depositDone(msg.value, msg.sender);
        return balance[msg.sender];
    }

    // function for W3S Token holders to withdraw W3S to their address
    function withdraw(uint256 amount) public returns (uint256) {
        require(balance[msg.sender] >= amount); // prevents withdraw of others' money
        payable(msg.sender).transfer(amount); // run the transfer function
        balance[msg.sender] -= amount; // remove amount from balance before transfer occurs
        emit balanceWithdrawn(msg.sender);
        return balance[msg.sender];
    }

    // Get W3S Token Balance
    function getBalance() public view returns (uint256) {
        return balance[msg.sender];
    }

    // Transfer public function
    function transfer(address recipient, uint256 amount) public {
        require(balance[msg.sender] >= amount, "W3S Balance not sufficient");
        require(
            msg.sender != recipient,
            "Don't transfer W3S tokens to yourself"
        );

        uint256 previousSenderBalance = balance[msg.sender];

        _transfer(msg.sender, recipient, amount);

        // governmentInstance.addTransaction(msg.sender, recipient, amount);

        // add event
        emit balanceTransfered(amount, msg.sender, recipient);

        assert(balance[msg.sender] == previousSenderBalance - amount);
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) private {
        balance[from] -= amount;
        balance[to] += amount;
    }
}

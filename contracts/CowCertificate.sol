// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CowCertificate {
    uint256 public taskCount = 0;
    mapping (address => uint) balances;
    // string[] dataCowCert;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    struct TaskCow {
        uint256 id;
        string dataCow;
    }

    mapping(uint256 => TaskCow) public taskcows;

    event TaskCreatedCowCert(uint256 id, string dataCow);

    constructor() public {
        balances[tx.origin] = 10000;
    }

    function CreateCowCert(string memory _data) public {
        taskCount++;
        taskcows[taskCount] = TaskCow(taskCount, _data);
        emit TaskCreatedCowCert(taskCount, _data);
    }

    function getBalance(address addr) public view returns(uint) {
        return balances[addr];
    }
}

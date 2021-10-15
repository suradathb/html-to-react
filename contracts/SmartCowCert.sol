// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SmartCowCert {
    uint public taskCount = 0;

  struct Task {
    uint id;
    string content;
    bool completed;
  }

  mapping(uint => Task) public tasks;

  event TaskCreated(
    uint id,
    string content,
    bool completed
  );

  event TaskCompleted(
    uint id,
    bool completed
  );

  constructor() public {
    createTask("CowCert.com");
  }

  function createTask(string memory _content) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _content, false);
    emit TaskCreated(taskCount, _content, false);
  }

  function toggleCompleted(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.completed);
  }
    // string public createCowCert;
    // uint public taskCount = 0;

    // constructor () public {
    //     addCowCert('CowCertificate');
    // }
    // function addCowCert(string memory _createCowCert) public {
    //     taskCount++;
    //     createCowCert = _createCowCert;
    // }


    // function getCowCert() public view returns(string memory){
    //     return createCowCert;
    // }
}
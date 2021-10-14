const SmartCowCert = artifacts.require("SmartCowCert");
const TodoList = artifacts.require("TodoList");

module.exports = function (deployer) {
  deployer.deploy(SmartCowCert);
  deployer.deploy(TodoList);
};

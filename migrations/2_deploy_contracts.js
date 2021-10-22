const SmartCowCert = artifacts.require("SmartCowCert");
const TodoList = artifacts.require("TodoList");
const CowCertificate =artifacts.require("CowCertificate");

module.exports = function (deployer) {
  deployer.deploy(SmartCowCert);
  deployer.deploy(TodoList);
  deployer.deploy(CowCertificate);
};

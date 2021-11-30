const CowCoin = artifacts.require("CowCoin");

module.exports = function (deployer) {
  deployer.deploy(CowCoin);
};

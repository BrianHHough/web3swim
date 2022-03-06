const Migrations = artifacts.require("Migrations");
const Balance = artifacts.require("web3swimBalance");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Balance);
};

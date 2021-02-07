const JuliToken = artifacts.require("JuliToken");

module.exports = function (deployer) {
  deployer.deploy(JuliToken, 1000000);
};

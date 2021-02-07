const JuliToken = artifacts.require("JuliToken");

module.exports = function (deployer) {
  deployer.deploy(JuliToken);
};

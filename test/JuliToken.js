// what is "artifacts"?
var JuliToken = artifacts.require("../contracts/JuliToken.sol");

contract("JuliToken", function (accounts) {
  console.log("seyun");

  it("sets the total supply on deployment", function () {
    return JuliToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.totalSupply.call();
      })
      .then(function (totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          1000000,
          "sets the total supply to 1,000,000"
        );
      });
  });
});

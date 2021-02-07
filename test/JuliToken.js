// what is "artifacts"?
var JuliToken = artifacts.require("../contracts/JuliToken.sol");

contract("JuliToken", function (accounts) {
  var tokenInstance;

  it("initializes the contracts with the correct values", function () {
    return JuliToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.name();
      })
      .then(function (name) {
        assert.equal(name, "Juli Token", "has the correct name");
        return tokenInstance.symbol();
      })
      .then(function (symbol) {
        assert.equal(symbol, "JUL", "has the correct symbol");
        return tokenInstance.standard();
      })
      .then(function (standard) {
        assert.equal(standard, "Juli Token v1.0", "has the correct standard");
      });
  });

  it("allocates the initial supply on deployment", function () {
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
        return tokenInstance.balanceOf(accounts[0]);
      })
      .then(function (adminBalance) {
        assert.equal(
          adminBalance.toNumber(),
          1000000,
          "allocates the initial supply to the admin account"
        );
      });
  });
});

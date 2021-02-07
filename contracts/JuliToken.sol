pragma solidity 0.5.16;

contract JuliToken {
    string public name = "Juli Token";
    string public symbol = "JUL";
    string public standard = "Juli Token v1.0";
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}

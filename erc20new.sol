// SPDX-License-Identifier:MIT
pragma solidity ^0.8.10;

interface IERC20{

    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns(uint);
    function transfer(address recipient , uint amount) external returns(bool);
    function allowance(address owner, address spender) external view returns(uint);
    function approve(address spender, uint amount) external returns(bool);
    function transferFrom( address sender, address recipient , uint amount ) external returns(bool);
    event Transfer(address indexed from , address indexed to , uint amount);
    event Approval(address indexed ownder , address indexed spender , uint amount);
}

contract ERC20 is IERC20{
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address=> mapping(address=> uint)) public allowance;
    address[] public blackList;

    string public name = "Test";
    string public symbol = "TEST";
    uint8 public decimals = 18;

    function blacklist(address user) public {
        blackList.push(user);
    }

    function checkBlackList(address user) internal view returns(bool){
        uint i;
        for( i=0; i<blackList.length; i++){
            if(blackList[i]==user){
                return true;
            }
        }
        return false;
    }
    function transfer(address recipient , uint amount) external returns(bool){
        require(checkBlackList(recipient) == false);
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient]+=amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
        
        
        
    }
    
    function approve(address spender, uint amount) external returns(bool){
        require(checkBlackList(spender)==false);
        
            allowance[msg.sender][spender] = amount;
            emit Approval(msg.sender, spender, amount);
            return true;
        
        
    }
    function transferFrom( address sender, address recipient , uint amount ) external returns(bool){
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient]+= amount;
        emit Transfer(sender, recipient , amount);
        return true;
    }
    
 
    function mint(uint amount) external {
        balanceOf[msg.sender]+= amount;
        totalSupply += amount;
        emit Transfer(address(0) , msg.sender, amount);
    }
  
    function burn(uint amount) external{
        balanceOf[msg.sender]-= amount;
        totalSupply -= amount;
        emit Transfer( msg.sender,address(0) , amount);
    }

    

    

}

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Election {
    string public candidateName  = "Man1";

    function getCandidateName() public view returns (string memory)
    {
        return candidateName;
    }

    function setCandidate (string memory _name) public {
        candidateName = _name;
    }
}
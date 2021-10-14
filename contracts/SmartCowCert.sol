// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SmartCowCert {
    string public createCowCert;

    constructor () public {
        addCowCert('CowCertificate');
    }
    function addCowCert(string memory _createCowCert) public {
        createCowCert = _createCowCert;
    }


    function getCowCert() public view returns(string memory){
        return createCowCert;
    }
}
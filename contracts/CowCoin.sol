// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CowCoin is ERC721 {
    
    // Permission address at create Certificate and send new cert to Customers.
    uint public goverCount = 0;
    uint public cowCertCount = 0;
    
    address [] government;
    
    struct AdAdmin{
        uint256 userId;
        address government;
        string username;
    }
    
    struct AddCertCoin {
        uint256 id;
        string tokendId;
        string cowCertlist;
        string imgPath;
    }
    
    mapping(uint256 => AdAdmin) public taskcows;
    mapping(uint256 => AddCertCoin) public blacklistedCowCert;
    mapping(uint256 => bool) public blockCowcert;
    // mapping(uint256 => bool) internal blockCowcert;

   
    
    constructor()   
    ERC721("SmartCowcert","SMARTCOWCERT")
    {
        taskcows[goverCount] = AdAdmin(goverCount,msg.sender,"Suradath");
    }

    modifier onlyGovernment() {
          for(uint i = 0; i <= goverCount; i++)
        {
            if(taskcows[i].government == msg.sender)
            {
                require(msg.sender == taskcows[i].government ,"You are not Owner!");
                _;
            }
        }
        // require(msg.sender == taskcows[goverCount].government ,"You are not Owner!");
        // _;
    }

    event TaskCreatedadmin(
        uint256 userId,
        address government,
        string username
    );
    event TaskCreateCowCert(
        uint256 id,
        string tokendid,
        string cowCertlist,
        string imgPath
    );
    
    // Add admin address by governments add to admin
    function addAdmin(address _government,string memory _username) public {
        // require(msg.sender == taskcows[goverCount].government,"You not create Admin");
        for(uint256 i = 0; i <= goverCount; i++)
        {
            if(taskcows[i].government == msg.sender)
            {
                require(msg.sender == taskcows[i].government,"You not create Admin");
                goverCount++;
                taskcows[goverCount] = AdAdmin(goverCount,_government,_username);
                emit TaskCreatedadmin(goverCount,_government,_username);
            }        
        }
        
    }
    
    function tokenizedCowCert(address _realEstateOwner, string memory _tokenId,string memory _cowCertlist,string memory _imgPath)
        public
        onlyGovernment
    {
        cowCertCount++;
        blacklistedCowCert[cowCertCount] = AddCertCoin(cowCertCount,_tokenId,_cowCertlist,_imgPath);
        // super._mint(_realEstateOwner, _tokenId);
        super._mint(_realEstateOwner,cowCertCount);
        emit TaskCreateCowCert(cowCertCount,_tokenId,_cowCertlist,_imgPath);
    }

    // function getTokenizedCowCer(uint256 _id) public view returns(uint256,uint256,string memory,string memory){
    //     return blacklistedCowCert(_id);
    // }

    // Stop or block Cowcoin Nft from buying or selling.
    function disableTransfer(uint256 _tokenId) public onlyGovernment {
        blockCowcert[_tokenId] = true;
    }
    
    function enableTransfer(uint256 _tokenId) public onlyGovernment {
        blockCowcert[_tokenId] = false;
    }

    // Setup sell  Customer Payment to sell  Customer type P2P 
    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public virtual override {
        require(blockCowcert[_tokenId] == false);
        super.safeTransferFrom(_from, _to, _tokenId);
    }

}
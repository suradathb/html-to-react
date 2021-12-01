import React, { Component } from "react";
import axios from "axios";
import Web3 from "web3";
import CowCoin from "./abis/CowCoin.json";
import ERC721 from "./abis/ERC721.json";
import { Link } from "react-router-dom";

class Member extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    // await this.getEmployeestest();
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
    }
  }

  async loadBlockchainData() {
    if (window.web3) {
      const web3 = window.web3;
      // Load account
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      const networkData = CowCoin.networks[networkId];
      const abi = CowCoin.abi;
      const abiERC = ERC721.abi;
      const address = networkData.address;
      const cowCoin = new web3.eth.Contract(abi, address);
      const cowerc = new web3.eth.Contract(abiERC, address);
      this.setState({ cowCoin });
      this.setState({ cowerc });
      const coinCow = await cowCoin.methods.cowCertCount().call();
      this.setState({ coinCow });
      for (var i = 1; i <= coinCow; i++) {
        const task = await cowCoin.methods.blacklistedCowCert(i).call();
        // console.log(task)
        this.setState({
          tasks: [...this.state.tasks, task],
        });
      }
      axios
        .get(
          `https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0x4c17Cf6ADaaB57285556332e74C853a07962C0A0&address=${accounts}`
        )
        .then((response) => {
          const getDataAll = response.data.result.map((cow, key) => {
            // console.log(cow);
            this.setState({
              hash: [...this.state.hash, cow],
            });
          });
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      cowCoin: [],
      coinCow: 0,
      cowerc: [],
      tasks: [],
      arrayCow: "",
      dataall: [],
      selectDrop: "1",
      search: "",
      searchShow: [],
      hash: [],
      getapi: [],
      owner: "",
      isReadMore:true,
    };
    // this.getEmployeestest = this.getEmployeestest.bind(this);
  }
  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-6 m-auto text-center">
            <p class="inputname">{this.state.account}</p>
          </div>
        </div>
        <div class="container py-5">
          <div class="row py-5">
            <table class="table table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Name</th>
                  <th scope="col">เจ้าของเหรียญ</th>
                </tr>
              </thead>
              <tbody>
                {this.state.hash.map((namecontract, keyname) => {
                  const smarts = this.state.tasks;
                  const histshow = smarts[keyname].cowCertlist;
                  const afterSp = histshow.split(",");
                //   console.log(namecontract.hash.length)
                  if (smarts[keyname].id == namecontract.tokenID) {
                    return (
                      <tr key={keyname}>
                        <td>{smarts[keyname].tokendId}</td>
                        <td>
                          <img
                            className="CowCoin"
                            src={`https://ipfs.io/ipfs/${smarts[keyname].imgPath}`}
                            alt=""
                          />
                        </td>
                        <td>
                          {afterSp[3]}
                        </td>
                        <td>
                        <Link class="nav-link"
                              value={smarts[keyname].id}
                              to="/search"
                            >
                        {this.state.isReadMore ? namecontract.hash.slice(0, 20) + "..." : namecontract.hash}
                        </Link>
                          {/* {namecontract.hash} */}
                          <br />
                          {namecontract.to}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Member;

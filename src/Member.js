import React, { Component } from "react";
import axios from "axios";
import Web3 from "web3";
import CowCoin from "./abis/CowCoin.json";
import ERC721 from "./abis/ERC721.json";
import { Link, Route } from "react-router-dom";
import "./Member.css";
import SearchItem from "./SearchItem";
import ShowItemCowCert from "./Components/ShowItemCowCert";

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

      axios
        .get(
          `https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0x82eaDcf8504F893993cf075b98f11465078B240E&address=${accounts}`
        )
        .then((response) => {
          const getDataAll = response.data.result.map((cow, key) => {
            const getacc = this.state.account.toLocaleLowerCase();
            if (cow.to != getacc) {
              this.setState({
                balance: [...this.state.balance, cow.tokenID],
              });
            }
            const task = cowCoin.methods.blacklistedCowCert(cow.tokenID).call();
            task.then((hist) => {
              this.setState({
                tasks: [...this.state.tasks, hist],
              });
            });
            // console.log(task)
            this.setState({
              hash: [...this.state.hash, cow],
              // tasks: [...this.state.tasks, task],
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
      balance: [],
      isReadMore: true,
    };
    // this.getEmployeestest = this.getEmployeestest.bind(this);
  }
  SendView;
  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-6 m-auto text-center">
            <img
              className="imgPreview"
              src="../assets/images/cowcert-01.png"
              alt=""
            />
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
                  <th scope="col">Hash</th>
                </tr>
              </thead>
              <tbody>
                {this.state.hash.map((namecontract, keyname) => {
                  let num;
                  const depArray = this.state.balance.map((j) => {
                    num = j;
                    return num;
                  });
                  const smarts = this.state.tasks;
                  if (smarts[keyname] != undefined) {
                    const histshow = smarts[keyname].cowCertlist;
                    const afterSp = histshow.split(",");
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
                          <td>{afterSp[3]}</td>
                          <td>
                            <Link
                              to={`/hiscowcoin/${namecontract.hash}`}
                              title={
                                smarts[keyname].tokendId + "," + afterSp[3]
                              }
                            >
                              {namecontract.hash}
                            </Link>
                          </td>
                          <td>
                            <SearchItem
                              hash={namecontract}
                              smart={histshow}
                              pad={depArray}
                              accessKey={smarts[keyname].id}
                              account={this.state.account}
                              images={smarts[keyname].imgPath}
                            />
                          </td>
                        </tr>
                      );
                    }
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

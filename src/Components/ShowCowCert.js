import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AddCowCert from "../AddCowCert";
// import BlockCowCert from "./Components/BlockCowCert";
import Web3 from "web3";
import CowCoin from "../abis/CowCoin.json";
import ERC721 from "../abis/ERC721.json";
import CowCertificate from "../abis/CowCertificate.json";
import axios from "axios";
import "./ShowCowCert.css";
import BlockCowCert from "./BlockCowCert";

class ShowCowCert extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
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
        const shwaddress = await cowerc.methods.ownerOf(i).call();
        const checkblock = await cowCoin.methods.blockCowcert(i).call();
        // console.log(cowCoin.methods.blockCowcert(i).call());
        // console.log(checkblock)
        this.setState({
          tasks: [...this.state.tasks, task],
          owner: [...this.state.owner, shwaddress],
          status: [...this.state.status,checkblock],
        });
      }
      axios
        .get(
          // "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x82eaDcf8504F893993cf075b98f11465078B240E&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
          "https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0xA97b83e0a21698770A0259b8e0dB03D48ac6F9C6"
        )
        .then((response) => {
          // this.setState({
          //   setDataAll: [...this.state.setDataAll, response.data],
          // });
          const getDataAll = response.data.result.map((cow, key) => {
            const hashs = {
              hash: cow.hash,
              token: cow.tokenID,
              from: cow.from,
              to: cow.to,
            };
            this.setState({
              hash: [...this.state.hash, hashs],
            });
            // console.log(this.state.blocks)
            // let arrTmp = cow.result;
            // const saveshow = [];
            // if (arrTmp.length) {
            //   for (var i = 1; i <= arrTmp.length; i++) {
            //     if (arrTmp[i] === undefined) continue;
            //     this.setState({
            //       hash: [...this.state.hash, arrTmp[i].hash],
            //       blocks: [...this.state.blocks, arrTmp[i]],
            //     });
            //   }
            // }
          });
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      cowCoin: [],
      taskCount: 0,
      tasks: [],
      loading: true,
      setDataAll: [],
      hash: [],
      getdata: [],
      searchShow: [],
      search: "",
      blocks: [],
      owner: "",
      status: [],
    };
  }
  searchChanged = (event) => {
    // console.log(event)
    const search = this.state.search;
    const selectDrop = this.state.selectDrop;
    const hash = this.state.hash;
    //  console.log(this.state.coinCow);
    for (var c = 0; c <= this.state.coinCow; c++) {
      const getdata = this.state.cowCoin.methods.blacklistedCowCert(c).call();
      // console.log(getdata)
      getdata.then((result) =>
        this.setState({
          searchShow: result,
        })
      );
    }
  };
  setBlockcowcoin = (gard) => {
    console.log(gard);
  };
  copyCodeToClipboard = (e) => {
    const el = e;
    document.execCommand("copy");
  };

  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-12 m-auto text-center">
            <h1 class="h1">ผู้ดูแลระบบ</h1>
            <div class="input-group mb-3">
              <p></p>
            </div>
          </div>
        </div>
        <div class="container py-5">
          <div class="row py-5">
            <form
              class="col-md-12 m-auto"
              role="form"
              // onSubmit={() => alert(JSON.stringify(this.state))}
              onSubmit={(event) => {
                event.preventDefault();
                // console.log(this.state)
                this.searchChanged();
              }}
            >
              <div className="Add-app">
                <Link class="btn btn-success btn-lg px-3" to="/addowner">
                  สร้างผู้ดูแล &nbsp;
                  <i className="fa fa-plus-circle"></i>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link class="btn btn-success btn-lg px-3" to="/AddCowCert">
                  สร้าง CowCert &nbsp;
                  <i className="fa fa-plus-circle"></i>
                </Link>      
                <hr />
                <p>Totals : {this.state.coinCow} รายการ</p>
              </div>

              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">รหัสวัว</th>
                    <th scope="col">รูป</th>
                    <th scope="col">ชื่อวัว</th>
                    <th scope="col">เจ้าของวัว</th>
                    <th scope="col">สถานะเหรียญ</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {isCowCoin} */}
                  {this.state.tasks.map((task, keyTask) => {
                    const beforAr = task.cowCertlist;
                    const afterSp = beforAr.split(",");
                    const owner = this.state.owner;
                    // console.log(this.state.status)
                    const boolst = this.state.status
                    // console.log(boolst)
                    return (
                      <>
                        <tr key={keyTask}>
                          <td>{task.tokendId}</td>
                          <td>
                            <img
                              className="CowCoin"
                              src={`https://ipfs.io/ipfs/${task.imgPath}`}
                              alt=""
                            />
                          </td>
                          <td>{afterSp[3]}</td>
                          <td>
                            {owner[keyTask].toLocaleLowerCase()}
                            <br />
                            Hash :{" "}
                            {this.state.hash.map((hash, key) => {
                              // console.log(hash.status)
                              if (
                                hash.to == owner[keyTask].toLocaleLowerCase() &&
                                hash.token == task.id
                              ) {
                                return (
                                  <td>
                                    <Link to={`/hiscowcoin/${hash.hash}`}>
                                      {hash.hash}
                                    </Link>
                                  </td>
                                );
                              }
                            })}
                          </td>
                          {this.state.hash.map((hashd, keyd) => {
                            const checkblock = this.state.cowCoin.methods
                              .blockCowcert(task.id)
                              .call();
                            if (
                              this.state.cowCoin.methods
                                .blockCowcert(task.id)
                                .call() == false
                            ) {
                              console.log("OK");
                            }
                            if (
                              hashd.to == owner[keyTask].toLocaleLowerCase() &&
                              hashd.token == task.id
                            ) {
                              return (
                                <>
                                <td>
                                  <BlockCowCert
                                    ERC721={this.state.cowCoin}
                                    images={task.imgPath}
                                    smart={beforAr}
                                    ID={task.id}
                                    status = {boolst[keyTask]}
                                  />
                                  </td>
                                  <td>
                                  <Link
                                    class="btn btn-outline-secondary"
                                    value={task.tokendId}
                                    to={`/hiscowcoin/${hashd.hash}`}
                                  >
                                    <i class="fa fa-eye"></i>
                                    &nbsp; เพิ่มเติม
                                  </Link>
                                </td>
                                </>
                              );
                            }
                          })}
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCowCert;
